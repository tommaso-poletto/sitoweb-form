import { supabase } from './supabaseClient';
import { simulatedDb } from './simulatedDb';
import { 
  Submission, 
  // AnswerSingle, 
  // AnswerMulti, 
  // AnswerRanked, 
  // AnswerCustomText, 
  // EventLog, 
  EventType 
} from './types';

// Helper to generate a session token (simple UUID-like string)
export const generateSessionToken = () => {
  return crypto.randomUUID();
};

// --- Submissions ---

export const createSubmission = async (sessionToken: string): Promise<Submission | null> => {
  if (!supabase) {
    return simulatedDb.createSubmission(sessionToken);
  }

  // @ts-ignore
  const { data, error } = await supabase
    .from('submissions')
    .insert({ session_token: sessionToken })
    .select()
    .single();

  if (error) {
    console.error('Error creating submission:', error);
    return null;
  }
  return data as Submission;
};

export const linkUserToSubmission = async (submissionId: number, email: string): Promise<boolean> => {
    if (!supabase) {
        const user = simulatedDb.getOrCreateUser(email);
        simulatedDb.linkUserToSubmission(submissionId, user.id);
        return true;
    }

    let userId: number | null = null;
    const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();
    
    if (existingUser) {
        userId = (existingUser as any).id;
    } else {
        // @ts-ignore
        const { data: newUser, error: userError } = await supabase
            .from('users')
            .insert({ email })
            .select()
            .single();
        
        if (userError) {
            console.error('Error creating user:', userError);
            return false;
        }
        userId = newUser ? (newUser as any).id : null;
    }

    if (!userId) return false;

    // @ts-ignore
    const { error: updateError } = await supabase
        .from('submissions')
        .update({ user_id: userId })
        .eq('id', submissionId);

    if (updateError) {
        console.error('Error linking user to submission:', updateError);
        return false;
    }

    return true;
};

// --- Question & Options Helpers ---

export const getQuestionByCode = async (code: string) => {
    if (!supabase) return simulatedDb.getQuestionByCode(code);

    const { data, error } = await supabase
        .from('questions')
        .select('id, code, q_type')
        .eq('code', code)
        .single();
    
    if (error) {
        console.error(`Error fetching question ${code}:`, error);
        return null;
    }
    return data;
};

export const getOptionByCode = async (questionId: number, code: string) => {
    if (!supabase) return simulatedDb.getOptionByCode(questionId, code);

    const { data, error } = await supabase
        .from('options')
        .select('id, code')
        .eq('question_id', questionId)
        .eq('code', code)
        .single();

    if (error) {
        console.error(`Error fetching option ${code} for q ${questionId}:`, error);
        return null;
    }
    return data;
};


// --- Answers ---

export const saveAnswerSingle = async (
  submissionId: number, 
  questionCode: string, 
  optionCode: string
) => {
  const question = await getQuestionByCode(questionCode);
  if (!question) return;

  const option = await getOptionByCode(question.id, optionCode);
  if (!option) return;

  if (!supabase) {
    simulatedDb.saveAnswerSingle(submissionId, question.id, option.id);
    return;
  }

  // @ts-ignore
  const { error } = await supabase
    .from('answers_single')
    .upsert({ 
       submission_id: submissionId, 
       question_id: question.id, 
       option_id: option.id 
    }, { onConflict: 'submission_id, question_id' });

  if (error) console.error('Error saving single answer:', error);
};

export const saveAnswerMulti = async (
    submissionId: number, 
    questionCode: string, 
    optionCodes: string[]
  ) => {
    const question = await getQuestionByCode(questionCode);
    if (!question) return;

    if (!supabase) {
      const optionIds: number[] = [];
      for (const code of optionCodes) {
        const opt = await getOptionByCode(question.id, code);
        if (opt) optionIds.push(opt.id);
      }
      simulatedDb.saveAnswerMulti(submissionId, question.id, optionIds);
      return;
    }
  
    // @ts-ignore
    await supabase
        .from('answers_multi')
        .delete()
        .eq('submission_id', submissionId)
        .eq('question_id', question.id);

    for (const code of optionCodes) {
        const option = await getOptionByCode(question.id, code);
        if (option) {
            // @ts-ignore
            await supabase.from('answers_multi').insert({
                submission_id: submissionId,
                question_id: question.id,
                option_id: option.id
            });
        }
    }
};

export const saveAnswerRanked = async (
    submissionId: number,
    questionCode: string,
    rankedOptionCodes: string[]
) => {
    const question = await getQuestionByCode(questionCode);
    if (!question) return;

    if (!supabase) {
        const optionIds: number[] = [];
        for (const code of rankedOptionCodes) {
            const opt = await getOptionByCode(question.id, code);
            if (opt) optionIds.push(opt.id);
        }
        simulatedDb.saveAnswerRanked(submissionId, question.id, optionIds);
        return;
    }

    // @ts-ignore
    await supabase.from('answers_ranked').delete().eq('submission_id', submissionId).eq('question_id', question.id);

    for (let i = 0; i < rankedOptionCodes.length; i++) {
        const code = rankedOptionCodes[i];
        const option = await getOptionByCode(question.id, code);
        if (option) {
            // @ts-ignore
            await supabase.from('answers_ranked').insert({
                submission_id: submissionId,
                question_id: question.id,
                option_id: option.id,
                rank: i + 1
            });
        }
    }
};

export const saveCustomText = async (
    submissionId: number,
    questionCode: string,
    text: string
) => {
    const question = await getQuestionByCode(questionCode);
    if (!question) return;

    if (!supabase) {
        simulatedDb.saveCustomText(submissionId, question.id, text);
        return;
    }
    
    // @ts-ignore
    await supabase.from('answers_custom_text')
        .delete()
        .eq('submission_id', submissionId)
        .eq('question_id', question.id);

    if (!text) return;

    // @ts-ignore
    const { error } = await supabase.from('answers_custom_text').insert({
        submission_id: submissionId,
        question_id: question.id,
        text
    });

    if (error) console.error('Error saving custom text:', error);
};


// --- Events ---

export const logEvent = async (
    eventType: EventType,
    submissionId?: number | null,
    sessionToken?: string,
    payload?: any
) => {
    if (!supabase) {
        simulatedDb.logEvent({ id: 0, submission_id: submissionId, session_token: sessionToken, event_type: eventType, event_payload: payload, created_at: new Date().toISOString() });
        return;
    }

    // @ts-ignore
    const { error } = await supabase.from('events').insert({
        event_type: eventType,
        submission_id: submissionId,
        session_token: sessionToken,
        event_payload: payload
    });

    if (error) console.error('Error logging event:', error);
};
