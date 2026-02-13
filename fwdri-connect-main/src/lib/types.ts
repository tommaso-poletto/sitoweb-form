export type QuestionType = 'single' | 'multi' | 'ranked' | 'email';

export interface Question {
  id: number;
  code: string;
  step: number;
  q_type: QuestionType;
  text: string;
  created_at: string;
}

export interface Option {
  id: number;
  question_id: number;
  code: string;
  label: string;
  is_exclusive: boolean;
  sort_order: number;
  created_at: string;
}

export interface Submission {
  id: number;
  user_id?: number | null;
  session_token: string;
  created_at: string;
}

export interface AnswerSingle {
  submission_id: number;
  question_id: number;
  option_id: number;
  created_at: string;
}

export interface AnswerMulti {
  submission_id: number;
  question_id: number;
  option_id: number;
  created_at: string;
}

export interface AnswerCustomText {
  id: number;
  submission_id: number;
  question_id: number;
  text: string;
  created_at: string;
}

export interface AnswerRanked {
  submission_id: number;
  question_id: number;
  option_id: number;
  rank: number;
  created_at: string;
}

export type EventType = 'CLICK_GET_BETA' | 'CLICK_DISCOVER_SOLUTION' | 'SUBMIT_EMAIL';

export interface EventLog {
  id: number;
  submission_id?: number | null;
  user_id?: number | null;
  session_token?: string | null;
  event_type: EventType;
  event_payload?: any;
  created_at: string;
}
