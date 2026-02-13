
# Piano di Ricostruzione del Survey Form

## Panoramica
Ricostruire completamente il form survey `/survey` basandosi sui mockup forniti, mantenendo lo stile attuale ma seguendo il nuovo flusso in 10 schermate.

---

## Nuovo Flusso del Survey (10 Step)

| Step | Schermata | Descrizione |
|------|-----------|-------------|
| 1 | Welcome | "Torna ad amare il cibo. Senza l'ansia." + persona cycler + CTA "Verifica la tua idoneità" |
| 2 | Identità Alimentare | Griglia 3x3 di diete con icone (Glutine, Lattosio, Vegano, Istamina, Halal, Noci, Pesce, Uova, Medica) + input custom + opzione "Nessuna Restrizione" |
| 3 | Impatto Quotidiano | Domanda singola: quanto impattano le restrizioni? (Necessità Medica, Scelta Rigorosa, Preferenza) |
| 4 | Sfide Maggiori | Ranking delle difficoltà con numeri (Supermercato, Ristorante, Casa/Cucina, Nessuna Difficoltà) |
| 5 | Parliamo di Soluzioni | Hai mai investito denaro? (Sì pago regolarmente, Ho pagato in passato, No metodi gratuiti) |
| 6 | Gestione Imprevisti | Come gestisci gli imprevisti? (Investigo a fondo, Evito il problema, Rischio) |
| 7 | Unisciti a Noi | Email + checkbox "Tienimi aggiornato" (versione semplificata) |
| 8 | Analisi Profilo | Progress bars animati + "Possiamo aiutarti! Scopri la nostra soluzione" |
| 9 | Get to Know FWDRI | Carousel features (Map, Scanner, Organize) + card Beta Program con benefits |
| 10 | Success | "Il tuo cuore è la nostra benzina!" + Robin Hood message |

---

## Modifiche ai File

### 1. `src/pages/Survey.tsx` (Aggiornamento)
- Nuovi step types: `"welcome" | "diet" | "impact" | "challenges" | "solutions" | "unexpected" | "email" | "analysis" | "features" | "success"`
- Progress bar a 6 segmenti (raggruppando gli step delle domande)
- Rimuovere il flusso "questions" separato e feedback
- Nuovo state per ranking delle sfide
- Aggiornamento logica navigazione

### 2. `src/components/survey/StepWelcome.tsx` (Aggiornamento)
- Cambiare persona cycler per mostrare "Te." con icona cuore
- Aggiungere sottotitolo "L'UNICA SUPER APP PER"
- CTA button: "Verifica la tua idoneità →"
- Social proof: "500+ in lista d'attesa" con avatar stack

### 3. `src/components/survey/StepDiet.tsx` (Aggiornamento)
- Titolo: "Identità Alimentare"
- Griglia 3 colonne con 9 opzioni: Glutine, Lattosio, Vegano, Istamina, Halal, Noci, Pesce, Uova, Medica
- Card stile mockup: bordi arrotondati, icone personalizzate, colori forest-green quando selezionate
- Input custom "Altre allergie / Custom..."
- Opzione speciale "Nessuna Restrizione - Voglio solo esplorare l'app"

### 4. `src/components/survey/StepImpact.tsx` (Nuovo)
- Titolo: "Impatto Quotidiano"
- Sottotitolo: "Quanto queste restrizioni influenzano la tua vita?"
- 3 opzioni con icone e colori:
  - Necessità Medica (rosso) - "Rischio shock anafilattico o gravi conseguenze"
  - Scelta Rigorosa (verde) - "Non sgarro mai per etica, religione o salute"
  - Preferenza (giallo) - "Cerco di stare attento, ma se capita pazienza"

### 5. `src/components/survey/StepChallenges.tsx` (Nuovo)
- Titolo: "Sfide Maggiori"
- Sottotitolo: "Dove incontri le difficoltà più grandi?"
- Opzioni con ranking numerico (1, 2, 3...):
  - Al Supermercato - "Etichette incomprensibili"
  - Al Ristorante - "Ansia e sfiducia nello staff"
  - A Casa / Cucina - "Gestione dispensa e ricette"
  - Nessuna Difficoltà - "Gestisco tutto bene"

### 6. `src/components/survey/StepSolutions.tsx` (Nuovo)
- Titolo: "Parliamo di soluzioni"
- Sottotitolo: "Hai mai investito denaro per gestire la tua alimentazione?"
- 3 opzioni:
  - Sì, pago regolarmente (coin icon) - "Nutrizionista, App Premium..."
  - Ho pagato in passato (clock icon) - "Ma ho smesso per scarso valore"
  - No, uso metodi gratuiti (ban icon) - "Google, amici o fai-da-te"

### 7. `src/components/survey/StepUnexpected.tsx` (Nuovo)
- Titolo: "Gestione Imprevisti"
- Sottotitolo: "Quando devi mangiare fuori o comprare un prodotto che non conosci:"
- 3 opzioni:
  - Investigo a fondo (search icon) - "Chiamo il locale, leggo ogni etichetta"
  - Evito il problema (x icon) - "Rinuncio a uscire o compro sempre le stesse cose"
  - Rischio (dice icon) - "Mi fido dell'istinto o chiedo velocemente"

### 8. `src/components/survey/StepEmail.tsx` (Aggiornamento)
- Titolo: "Unisciti a noi"
- Sottotitolo: "Riceverai un invito prioritario appena FWDRI sarà pronta"
- Input email centrato con bordo verde
- Checkbox semplice: "Tienimi aggiornato"
- Rimuovere la sezione Founder Member complessa

### 9. `src/components/survey/AnalysisScreen.tsx` (Aggiornamento)
- Titolo: "Analisi del tuo profilo"
- Multiple progress bars animate con percentuali
- Messaggio finale: "Possiamo aiutarti!"
- CTA: "Scopri la nostra soluzione"

### 10. `src/components/survey/StepFeatures.tsx` (Nuovo)
- Titolo: "Get to know FWDRI"
- Carousel orizzontale con 3 cards:
  - MAP: trova ristoranti sicuri
  - SCANNER: scannerizza etichette
  - ORGANIZE: organizza la tua dispensa
- Card Beta Program sotto con benefits:
  - Sostieni il Database
  - Accesso Beta Priority (5 mesi prima)
  - Sconto 50% a VITA
- Firma stilizzata del founder
- CTA: "Unisciti alla community"

### 11. `src/components/survey/SuccessModal.tsx` (Aggiornamento)
- Icona cuore rosso animata
- Titolo: "Il tuo cuore è la nostra benzina!"
- Messaggio Robin Hood: "Grazie. Davvero. Vedere che ci supporteresti economicamente è la validazione che cercavamo. Ma non vogliamo i tuoi soldi finché l'app non è perfetta. Tieni i tuoi €1,90. Sei ufficialmente un Founder Member GRATIS."
- Badge: "Riceverai un profilo via email"
- CTA: "Accetta il regalo e Vai al Sito"

---

## Dettagli Tecnici

### Nuove Icone Necessarie
Utilizzare `lucide-react` per le icone:
- Glutine: `Wheat`
- Lattosio: `Milk`
- Vegano: `Leaf`
- Istamina: `FlaskConical`
- Halal: `Moon` o custom
- Noci: `Nut`
- Pesce: `Fish`
- Uova: `Egg`
- Medica: `Stethoscope`
- E altre per le opzioni delle domande

### Stile Cards Domande
```css
/* Card non selezionata */
bg-card border-2 border-border rounded-2xl

/* Card selezionata */
bg-forest-green/5 border-2 border-forest-green rounded-2xl
```

### Progress Bar
- 6 segmenti visibili
- Stile a pillole separate (verde pieno = completato, trattino = corrente)
- Badge "STEP X OF 6" sopra

### Animazioni
- Transizioni fluide tra step con Framer Motion
- Hover scale sulle cards
- Progress bars animate con shimmer effect

---

## Riassunto File da Modificare/Creare

| File | Azione |
|------|--------|
| `src/pages/Survey.tsx` | Modifica |
| `src/components/survey/StepWelcome.tsx` | Modifica |
| `src/components/survey/StepDiet.tsx` | Modifica |
| `src/components/survey/StepImpact.tsx` | Nuovo |
| `src/components/survey/StepChallenges.tsx` | Nuovo |
| `src/components/survey/StepSolutions.tsx` | Nuovo |
| `src/components/survey/StepUnexpected.tsx` | Nuovo |
| `src/components/survey/StepEmail.tsx` | Modifica |
| `src/components/survey/AnalysisScreen.tsx` | Modifica |
| `src/components/survey/StepFeatures.tsx` | Nuovo |
| `src/components/survey/SuccessModal.tsx` | Modifica |
| `src/components/survey/ProgressBar.tsx` | Modifica |

Rimuovere:
- `src/components/survey/StepQuestions.tsx` (integrato negli step specifici)
- `src/components/survey/StepFeedback.tsx` (non più necessario)
- `src/components/survey/StepFounder.tsx` (integrato in StepFeatures)
- `src/components/survey/PsychologicalHook.tsx` (non più necessario)
