-- Database Schema for FWDRI
-- Execute this in the Supabase SQL Editor

-- Users table
CREATE TABLE IF NOT EXISTS public.users (
    id BIGSERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Submissions table
CREATE TABLE IF NOT EXISTS public.submissions (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES public.users (id),
    session_token UUID NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions table
CREATE TABLE IF NOT EXISTS public.questions (
    id BIGSERIAL PRIMARY KEY,
    code TEXT UNIQUE NOT NULL,
    step INTEGER NOT NULL,
    q_type TEXT NOT NULL, -- 'single', 'multi', 'ranked', 'email'
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Options table
CREATE TABLE IF NOT EXISTS public.options (
    id BIGSERIAL PRIMARY KEY,
    question_id BIGINT REFERENCES public.questions (id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    label TEXT NOT NULL,
    is_exclusive BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (question_id, code)
);

-- Answers (Single choice)
CREATE TABLE IF NOT EXISTS public.answers_single (
    submission_id BIGINT REFERENCES public.submissions (id) ON DELETE CASCADE,
    question_id BIGINT REFERENCES public.questions (id) ON DELETE CASCADE,
    option_id BIGINT REFERENCES public.options (id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (submission_id, question_id)
);

-- Answers (Multiple choice)
CREATE TABLE IF NOT EXISTS public.answers_multi (
    id BIGSERIAL PRIMARY KEY,
    submission_id BIGINT REFERENCES public.submissions (id) ON DELETE CASCADE,
    question_id BIGINT REFERENCES public.questions (id) ON DELETE CASCADE,
    option_id BIGINT REFERENCES public.options (id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Answers (Ranked choice)
CREATE TABLE IF NOT EXISTS public.answers_ranked (
    id BIGSERIAL PRIMARY KEY,
    submission_id BIGINT REFERENCES public.submissions (id) ON DELETE CASCADE,
    question_id BIGINT REFERENCES public.questions (id) ON DELETE CASCADE,
    option_id BIGINT REFERENCES public.options (id) ON DELETE CASCADE,
    rank INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Custom text answers
CREATE TABLE IF NOT EXISTS public.answers_custom_text (
    id BIGSERIAL PRIMARY KEY,
    submission_id BIGINT REFERENCES public.submissions (id) ON DELETE CASCADE,
    question_id BIGINT REFERENCES public.questions (id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events / Analytics
CREATE TABLE IF NOT EXISTS public.events (
    id BIGSERIAL PRIMARY KEY,
    submission_id BIGINT REFERENCES public.submissions (id),
    session_token UUID,
    event_type TEXT NOT NULL,
    event_payload JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- --- Seed Initial Data ---

-- Seed Questions
INSERT INTO
    public.questions (id, code, step, q_type, text)
VALUES (
        1,
        'IDENTITA_ALIMENTARE',
        1,
        'multi',
        'Seleziona tutte le restrizioni o allergie che ti riguardano'
    ),
    (
        2,
        'IMPATTO_QUOTIDIANO',
        2,
        'single',
        'Quanto queste restrizioni influenzano la tua vita?'
    ),
    (
        3,
        'SFIDE_MAGGIORI',
        3,
        'ranked',
        'Dove incontri le difficoltà più grandi? (clicca per ordinare)'
    ),
    (
        4,
        'INVESTIMENTO_SOLUZIONI',
        4,
        'single',
        'Hai mai investito denaro per gestire la tua alimentazione?'
    ),
    (
        5,
        'GESTIONE_IMPREVISTI',
        5,
        'single',
        'Quando devi mangiare fuori o comprare un prodotto che non conosci:'
    ),
    (
        6,
        'EMAIL_JOIN',
        6,
        'email',
        'Inserisci la tua email per ricevere un invito prioritario'
    ) ON CONFLICT (code) DO
UPDATE
SET
    step = EXCLUDED.step,
    q_type = EXCLUDED.q_type,
    text = EXCLUDED.text;

-- Seed Options
INSERT INTO
    public.options (
        question_id,
        code,
        label,
        is_exclusive,
        sort_order
    )
VALUES
    -- IDENTITA_ALIMENTARE
    (
        1,
        'GLUTINE',
        'Glutine',
        FALSE,
        10
    ),
    (
        1,
        'LATTOSIO',
        'Lattosio',
        FALSE,
        20
    ),
    (
        1,
        'VEGANO',
        'Vegano',
        FALSE,
        30
    ),
    (
        1,
        'ISTAMINA',
        'Istamina',
        FALSE,
        40
    ),
    (
        1,
        'HALAL',
        'Halal',
        FALSE,
        50
    ),
    (1, 'NOCI', 'Noci', FALSE, 60),
    (
        1,
        'PESCE',
        'Pesce',
        FALSE,
        70
    ),
    (1, 'UOVA', 'Uova', FALSE, 80),
    (
        1,
        'MEDICA',
        'Medica',
        FALSE,
        90
    ),
    (
        1,
        'CUSTOM',
        'Altre allergie / Custom',
        FALSE,
        95
    ),
    (
        1,
        'NESSUNA_RESTRIZIONE',
        'Nessuna Restrizione',
        TRUE,
        100
    ),
    -- IMPATTO_QUOTIDIANO
    (
        2,
        'NECESSITA_MEDICA',
        'Necessità Medica',
        FALSE,
        10
    ),
    (
        2,
        'SCELTA_RIGOROSA',
        'Scelta Rigorosa',
        FALSE,
        20
    ),
    (
        2,
        'PREFERENZA',
        'Preferenza',
        FALSE,
        30
    ),
    -- SFIDE_MAGGIORI
    (
        3,
        'SUPERMERCATO',
        'Al Supermercato',
        FALSE,
        10
    ),
    (
        3,
        'RISTORANTE',
        'Al Ristorante',
        FALSE,
        20
    ),
    (
        3,
        'CASA_CUCINA',
        'A Casa / Cucina',
        FALSE,
        30
    ),
    (
        3,
        'NESSUNA_DIFFICOLTA',
        'Nessuna Difficoltà',
        TRUE,
        100
    ),
    -- INVESTIMENTO_SOLUZIONI
    (
        4,
        'PAGO_REGOLARMENTE',
        'Sì, pago regolarmente',
        FALSE,
        10
    ),
    (
        4,
        'HO_PAGATO_PASSATO',
        'Ho pagato in passato',
        FALSE,
        20
    ),
    (
        4,
        'METODI_GRATUITI',
        'No, uso metodi gratuiti',
        FALSE,
        30
    ),
    -- GESTIONE_IMPREVISTI
    (
        5,
        'INVESTIGO_FONDO',
        'Investigo a fondo',
        FALSE,
        10
    ),
    (
        5,
        'EVITO_PROBLEMA',
        'Evito il problema',
        FALSE,
        20
    ),
    (
        5,
        'RISCHIO',
        'Rischio',
        FALSE,
        30
    ) ON CONFLICT (question_id, code) DO
UPDATE
SET
    label = EXCLUDED.label,
    is_exclusive = EXCLUDED.is_exclusive,
    sort_order = EXCLUDED.sort_order;