// simulatedDb.ts - Client-side persistence for the mock database

import { 
  Submission, 
  Question, 
  Option, 
  AnswerSingle, 
  AnswerMulti, 
  AnswerRanked, 
  AnswerCustomText, 
  EventLog 
} from './types';

interface DbSchema {
  users: { id: number; email: string; created_at: string }[];
  submissions: (Submission & { user_id?: number | null })[];
  questions: Question[];
  options: Option[];
  answers_single: (AnswerSingle & { created_at: string })[];
  answers_multi: (AnswerMulti & { created_at: string })[];
  answers_ranked: (AnswerRanked & { created_at: string })[];
  answers_custom_text: AnswerCustomText[];
  events: EventLog[];
}

const STORAGE_KEY = 'fwdri_simulated_db';

const defaultQuestions: Question[] = [
  { id: 1, code: 'IDENTITA_ALIMENTARE', step: 1, q_type: 'multi', text: 'Seleziona tutte le restrizioni o allergie che ti riguardano', created_at: new Date().toISOString() },
  { id: 2, code: 'IMPATTO_QUOTIDIANO', step: 2, q_type: 'single', text: 'Quanto queste restrizioni influenzano la tua vita?', created_at: new Date().toISOString() },
  { id: 3, code: 'SFIDE_MAGGIORI', step: 3, q_type: 'ranked', text: 'Dove incontri le difficoltà più grandi? (clicca per ordinare)', created_at: new Date().toISOString() },
  { id: 4, code: 'INVESTIMENTO_SOLUZIONI', step: 4, q_type: 'single', text: 'Hai mai investito denaro per gestire la tua alimentazione?', created_at: new Date().toISOString() },
  { id: 5, code: 'GESTIONE_IMPREVISTI', step: 5, q_type: 'single', text: 'Quando devi mangiare fuori o comprare un prodotto che non conosci:', created_at: new Date().toISOString() },
  { id: 6, code: 'EMAIL_JOIN', step: 6, q_type: 'email', text: 'Inserisci la tua email per ricevere un invito prioritario', created_at: new Date().toISOString() },
];

const defaultOptions: Option[] = [
  // IDENTITA_ALIMENTARE
  { id: 1, question_id: 1, code: 'GLUTINE', label: 'Glutine', is_exclusive: false, sort_order: 10, created_at: new Date().toISOString() },
  { id: 2, question_id: 1, code: 'LATTOSIO', label: 'Lattosio', is_exclusive: false, sort_order: 20, created_at: new Date().toISOString() },
  { id: 3, question_id: 1, code: 'VEGANO', label: 'Vegano', is_exclusive: false, sort_order: 30, created_at: new Date().toISOString() },
  { id: 4, question_id: 1, code: 'ISTAMINA', label: 'Istamina', is_exclusive: false, sort_order: 40, created_at: new Date().toISOString() },
  { id: 5, question_id: 1, code: 'HALAL', label: 'Halal', is_exclusive: false, sort_order: 50, created_at: new Date().toISOString() },
  { id: 6, question_id: 1, code: 'NOCI', label: 'Noci', is_exclusive: false, sort_order: 60, created_at: new Date().toISOString() },
  { id: 7, question_id: 1, code: 'PESCE', label: 'Pesce', is_exclusive: false, sort_order: 70, created_at: new Date().toISOString() },
  { id: 8, question_id: 1, code: 'UOVA', label: 'Uova', is_exclusive: false, sort_order: 80, created_at: new Date().toISOString() },
  { id: 9, question_id: 1, code: 'MEDICA', label: 'Medica', is_exclusive: false, sort_order: 90, created_at: new Date().toISOString() },
  { id: 10, question_id: 1, code: 'CUSTOM', label: 'Altre allergie / Custom', is_exclusive: false, sort_order: 95, created_at: new Date().toISOString() },
  { id: 11, question_id: 1, code: 'NESSUNA_RESTRIZIONE', label: 'Nessuna Restrizione', is_exclusive: true, sort_order: 100, created_at: new Date().toISOString() },
  // IMPATTO_QUOTIDIANO
  { id: 12, question_id: 2, code: 'NECESSITA_MEDICA', label: 'Necessità Medica', is_exclusive: false, sort_order: 10, created_at: new Date().toISOString() },
  { id: 13, question_id: 2, code: 'SCELTA_RIGOROSA', label: 'Scelta Rigorosa', is_exclusive: false, sort_order: 20, created_at: new Date().toISOString() },
  { id: 14, question_id: 2, code: 'PREFERENZA', label: 'Preferenza', is_exclusive: false, sort_order: 30, created_at: new Date().toISOString() },
  // SFIDE_MAGGIORI
  { id: 15, question_id: 3, code: 'SUPERMERCATO', label: 'Al Supermercato', is_exclusive: false, sort_order: 10, created_at: new Date().toISOString() },
  { id: 16, question_id: 3, code: 'RISTORANTE', label: 'Al Ristorante', is_exclusive: false, sort_order: 20, created_at: new Date().toISOString() },
  { id: 17, question_id: 3, code: 'CASA_CUCINA', label: 'A Casa / Cucina', is_exclusive: false, sort_order: 30, created_at: new Date().toISOString() },
  { id: 18, question_id: 3, code: 'NESSUNA_DIFFICOLTA', label: 'Nessuna Difficoltà', is_exclusive: true, sort_order: 100, created_at: new Date().toISOString() },
  // INVESTIMENTO_SOLUZIONI
  { id: 19, question_id: 4, code: 'PAGO_REGOLARMENTE', label: 'Sì, pago regolarmente', is_exclusive: false, sort_order: 10, created_at: new Date().toISOString() },
  { id: 20, question_id: 4, code: 'HO_PAGATO_PASSATO', label: 'Ho pagato in passato', is_exclusive: false, sort_order: 20, created_at: new Date().toISOString() },
  { id: 21, question_id: 4, code: 'METODI_GRATUITI', label: 'No, uso metodi gratuiti', is_exclusive: false, sort_order: 30, created_at: new Date().toISOString() },
  // GESTIONE_IMPREVISTI
  { id: 22, question_id: 5, code: 'INVESTIGO_FONDO', label: 'Investigo a fondo', is_exclusive: false, sort_order: 10, created_at: new Date().toISOString() },
  { id: 23, question_id: 5, code: 'EVITO_PROBLEMA', label: 'Evito il problema', is_exclusive: false, sort_order: 20, created_at: new Date().toISOString() },
  { id: 24, question_id: 5, code: 'RISCHIO', label: 'Rischio', is_exclusive: false, sort_order: 30, created_at: new Date().toISOString() },
];

class SimulatedDb {
  private db: DbSchema;

  constructor() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      this.db = JSON.parse(stored);
    } else {
      this.db = {
        users: [],
        submissions: [],
        questions: defaultQuestions,
        options: defaultOptions,
        answers_single: [],
        answers_multi: [],
        answers_ranked: [],
        answers_custom_text: [],
        events: []
      };
      this.save();
    }
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.db));
  }

  getDb() {
    return this.db;
  }

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }

  // --- Operations ---

  createSubmission(sessionToken: string): Submission {
    const sub: Submission & { user_id?: number | null } = {
      id: Date.now(),
      session_token: sessionToken,
      created_at: new Date().toISOString(),
      user_id: null
    };
    this.db.submissions.push(sub);
    this.save();
    return sub;
  }

  getOrCreateUser(email: string) {
    let user = this.db.users.find(u => u.email === email);
    if (!user) {
      user = { id: Date.now(), email, created_at: new Date().toISOString() };
      this.db.users.push(user);
      this.save();
    }
    return user;
  }

  linkUserToSubmission(submissionId: number, userId: number) {
    const sub = this.db.submissions.find(s => s.id === submissionId);
    if (sub) {
      sub.user_id = userId;
      this.save();
    }
  }

  getQuestionByCode(code: string) {
    return this.db.questions.find(q => q.code === code);
  }

  getOptionByCode(questionId: number, code: string) {
    return this.db.options.find(o => o.question_id === questionId && o.code === code);
  }

  saveAnswerSingle(submissionId: number, questionId: number, optionId: number) {
    // Upsert
    this.db.answers_single = this.db.answers_single.filter(a => !(a.submission_id === submissionId && a.question_id === questionId));
    this.db.answers_single.push({ submission_id: submissionId, question_id: questionId, option_id: optionId, created_at: new Date().toISOString() });
    this.save();
  }

  saveAnswerMulti(submissionId: number, questionId: number, optionIds: number[]) {
    // Replace all for this question
    this.db.answers_multi = this.db.answers_multi.filter(a => !(a.submission_id === submissionId && a.question_id === questionId));
    optionIds.forEach(optionId => {
      this.db.answers_multi.push({ submission_id: submissionId, question_id: questionId, option_id: optionId, created_at: new Date().toISOString() });
    });
    this.save();
  }

  saveAnswerRanked(submissionId: number, questionId: number, rankedOptionIds: number[]) {
    // Replace all
    this.db.answers_ranked = this.db.answers_ranked.filter(a => !(a.submission_id === submissionId && a.question_id === questionId));
    rankedOptionIds.forEach((optionId, index) => {
      this.db.answers_ranked.push({ submission_id: submissionId, question_id: questionId, option_id: optionId, rank: index + 1, created_at: new Date().toISOString() });
    });
    this.save();
  }

  saveCustomText(submissionId: number, questionId: number, text: string) {
    this.db.answers_custom_text = this.db.answers_custom_text.filter(a => !(a.submission_id === submissionId && a.question_id === questionId));
    this.db.answers_custom_text.push({ id: Date.now(), submission_id: submissionId, question_id: questionId, text, created_at: new Date().toISOString() });
    this.save();
  }

  logEvent(event: EventLog) {
    this.db.events.push({ ...event, id: Date.now(), created_at: new Date().toISOString() });
    this.save();
  }
}

export const simulatedDb = new SimulatedDb();
