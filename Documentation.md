# Specifiche Complete Landing Page Evento per Cursor

## 📋 Riferimento e Obiettivo
**Landing di riferimento:** https://www.cleopeofficial.com/themerge/11.10

**Obiettivo:** Ricreare una landing page per evento esclusivo con le seguenti modifiche:
1. Sostituire l'immagine di background con un video
2. Utilizzare un logo personalizzato
3. Mantenere l'atmosfera dark, misteriosa ed esclusiva dell'originale

## 🎨 Analisi Design System

### Palette Colori
- **Testo principale:** Bianco puro #FFFFFF
- **Background base:** Nero puro #000000  
- **Overlay video:** Gradiente nero con opacità dal 40% al 70%
- **Elementi glassmorphism:** Bianco al 10-20% opacità con backdrop blur
- **Stati hover:** Aumento opacità del 10-20%

### Tipografia
- **Font body:** Sans-serif pulito e moderno (suggerimenti: Inter, Helvetica Neue, Arial)
- **Font display titoli:** Condensed o impact font (suggerimenti: Bebas Neue, Oswald, Anton)
- **Tracking testo "Presents":** Molto ampio, circa 0.3em
- **Pesi font:** Light per sottotitoli, Regular per body, Bold per CTA

### Sistema di Spaziature
- **Container max-width:** 1200px desktop, padding 20px mobile, 40px desktop
- **Spacing verticale tra sezioni:** Minimo 80px desktop, 60px mobile
- **Altezza hero section:** 70-80% del viewport height
- **Respiro elementi:** Ampio, evitare affollamento visivo

## 📐 Struttura Layout

### Header Fixed Elements
1. **Badge "LOCATION" (top-left)**
   - Posizione: fixed, top 30px, left 30px
   - Stile: glassmorphism (background blur + bordo bianco sottile)
   - Font size: 12-14px, uppercase, tracking ampio
   - Z-index alto per rimanere sopra tutto

2. **Button "Invite your friend" (top-right)**
   - Posizione: fixed, top 30px, right 30px  
   - Stesso stile glassmorphism del badge
   - Hover: aumentare opacità background
   - Cursor pointer ben visibile

### Hero Section (Centrata Verticalmente)
**Ordine degli elementi dall'alto:**

1. **Logo aziendale**
   - Dimensione: height 60-80px
   - Filtro: brightness(0) invert(1) per renderlo bianco
   - Margin bottom: 40px

2. **Testo "Presents"**
   - Font size: 14px
   - Uppercase, tracking molto ampio (0.3em)
   - Margin bottom: 30px
   - Animazione: fade in con delay 0.3s

3. **Titolo principale "SECRET PARTY"** 
   - Font size: 80-120px desktop, 50-70px mobile
   - Font weight: bold o black
   - Può essere testo o immagine SVG
   - Margin bottom: 40px
   - Animazione: scale da 0.9 a 1 con fade in

4. **Sottotitolo 1:** "A new chapter in the Milan electronic scene."
   - Font size: 22-24px desktop, 18-20px mobile
   - Font weight: light o regular
   - Margin bottom: 20px

5. **Sottotitolo 2:** "One city. Six crews. One party."
   - Font size: 20-22px desktop, 16-18px mobile
   - Margin bottom: 30px

6. **Titolo finale:** "This is THE MERGE."
   - Font size: 32-36px desktop, 24-28px mobile
   - Font weight: bold
   - Margin bottom: 60px
   - Possibile animazione emphasis

### Sezione RSVP Form
**Container del form:**
- Max width: 450px
- Margini: centrato orizzontalmente
- Background: glassmorphism effect
- Padding: 40px
- Border radius: 20px
- Border: 1px solid rgba(255,255,255,0.2)

**Elementi del form nell'ordine:**

1. **Testo introduttivo:** "Entrance via online ticket,"
   - Font size: 18px
   - Margin bottom: 10px

2. **Call to action:** "Get the RSVP below."
   - Font size: 16px  
   - Margin bottom: 30px
   - Opacity: 0.9

3. **Campo input email**
   - Height: 50px
   - Background: rgba(255,255,255,0.1)
   - Border: 1px solid rgba(255,255,255,0.3)
   - Placeholder: "Enter your email"
   - Testo bianco
   - Padding: 15px
   - Border radius: 8px

4. **Bottone submit**
   - Width: 100%
   - Height: 50px
   - Background: bianco
   - Colore testo: nero
   - Font weight: bold
   - Text: "GET RSVP"
   - Border radius: 8px
   - Hover: transform scale(1.02)
   - Margin top: 15px

5. **Disclaimer finale:** "You will receive more details by email after RSVP confirmation."
   - Font size: 12px
   - Opacity: 0.7
   - Margin top: 20px
   - Text align: center

## 🎬 Specifiche Video Background

### Contenuto Video Suggerito
- **Stile:** Astratto, luci bokeh, smoke effects, o ambiente club
- **Colori:** Prevalentemente scuri con flash di luce occasionali
- **Movimento:** Lento e ipnotico, non distraente
- **Loop:** Seamless, senza stacchi visibili

### Requisiti Tecnici Video
- **Formato:** MP4 (codec H.264 per compatibilità)
- **Risoluzione Desktop:** 1920x1080
- **Risoluzione Mobile:** 1280x720 (file separato)
- **Bitrate:** 2-3 Mbps per desktop, 1-2 Mbps per mobile
- **Durata:** 10-30 secondi
- **File size:** Max 5MB desktop, 2MB mobile
- **FPS:** 24 o 30
- **Audio:** Nessuno (sempre muted)

### Implementazione Video
- **Autoplay:** Sì, con attributi muted e playsinline
- **Loop:** Sì, continuo
- **Controls:** No, nascosti
- **Poster image:** Sì, primo frame come fallback
- **Loading:** Lazy o con preload="metadata"
- **Posizionamento:** Fixed, full screen coverage
- **Object-fit:** Cover per riempire sempre tutto lo schermo

### Overlay sul Video
- **Tipo:** Gradiente multiplo
- **Top:** Nero 50% opacità
- **Center:** Nero 30% opacità  
- **Bottom:** Nero 70% opacità
- **Scopo:** Garantire leggibilità testo su qualsiasi video

## 📱 Breakpoints Responsive

### Mobile (320px - 767px)
- **Video:** Versione mobile ottimizzata
- **Font sizes:** Ridotti del 30-40%
- **Padding container:** 20px
- **Badge/Button header:** Ridotti o nascosti su schermi molto piccoli
- **Form:** Full width con padding laterale

### Tablet (768px - 1023px)
- **Video:** Versione desktop con focus centrale
- **Font sizes:** Ridotti del 15-20%
- **Layout:** Simile a desktop ma più compatto
- **Form width:** Max 400px

### Desktop (1024px+)
- **Video:** Full quality, full coverage
- **Tutti gli elementi:** Dimensioni complete come da specifiche
- **Effetti hover:** Attivi su tutti gli elementi interattivi

## 🚀 Stack Tecnologico Consigliato

### Framework Options
1. **Next.js 14+ con App Router**
   - Pro: SEO ottimale, performance eccellenti, API routes integrate
   - Contro: Più complesso per progetti semplici
   - Quando usarlo: Se il SEO è prioritario

2. **Vite + React**
   - Pro: Build velocissimi, setup semplice
   - Contro: Necessita backend separato per form
   - Quando usarlo: Per development rapido

3. **Astro**
   - Pro: Performance massime, ottimo per landing statiche
   - Contro: Meno flessibilità per interattività complesse
   - Quando usarlo: Se la landing è mostly static

### Styling Approach
- **Framework CSS:** Tailwind CSS per rapid prototyping
- **Animazioni:** Framer Motion per React o GSAP per vanilla
- **Glassmorphism:** Backdrop-filter con CSS nativo

### Form Backend
- **Email service:** Resend, SendGrid, o Postmark
- **Database:** Supabase per storing RSVP
- **Validation:** Schema validation lato client e server

### Deployment
- **Hosting:** Vercel (per Next.js) o Netlify
- **CDN:** Cloudflare per video delivery
- **Domain:** Con SSL certificate

## ⚡ Funzionalità e Interazioni

### Animazioni On Load
1. **Video:** Fade in graduale (1s)
2. **Logo:** Fade in da opacity 0 (delay 0.2s)
3. **Testo "Presents":** Fade in + slide up (delay 0.4s)
4. **Titolo principale:** Scale 0.95 to 1 + fade in (delay 0.6s)
5. **Sottotitoli:** Fade in sequenziale (delay 0.8s, 1s, 1.2s)
6. **Form container:** Fade in + slide up (delay 1.4s)

### Stati Form RSVP
- **Default:** Campo email vuoto con placeholder
- **Focus:** Border più luminoso, leggero glow
- **Typing:** Feedback visivo real-time
- **Submitting:** Bottone con loading spinner
- **Success:** Messaggio conferma + reset form
- **Error:** Messaggio errore + shake animation

### Micro-interazioni
- **Hover su bottoni:** Scale 1.02 + aumento luminosità
- **Hover su badge:** Leggero movimento o glow
- **Focus su input:** Smooth transition border color
- **Success animation:** Checkmark animato

## 🔍 SEO e Meta Tags

### Meta Tags Essenziali
- **Title:** Nome evento + Location + Data
- **Description:** Breve descrizione misteriosa (max 155 char)
- **Keywords:** Electronic, underground, Milano, exclusive event
- **OG Image:** Screenshot o visual dell'evento
- **OG Type:** website o event

### Structured Data
- **Type:** Event
- **Location:** Venue address
- **Date:** Event date and time
- **Organizer:** Nome organizzatore
- **Ticket info:** RSVP required

## 📊 Performance Requirements

### Core Web Vitals Target
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **TTI (Time to Interactive):** < 3.5s

### Ottimizzazioni Necessarie
- **Video:** Compressione ottimale, lazy loading
- **Fonts:** Preload font critici
- **Images:** Next-gen formats (WebP, AVIF)
- **Code:** Minification e tree shaking
- **Caching:** Headers appropriati

## ✅ Checklist Implementazione

### Fase 1: Setup e Struttura
- [ ] Inizializzare progetto con framework scelto
- [ ] Setup Tailwind CSS e configurazione
- [ ] Creare struttura file e cartelle
- [ ] Preparare assets (logo, video, fonts)

### Fase 2: Layout Base
- [ ] Implementare video background con fallback
- [ ] Creare overlay gradiente per leggibilità
- [ ] Posizionare elementi fixed header
- [ ] Strutturare hero section con tutti i testi

### Fase 3: Form e Interattività  
- [ ] Sviluppare form RSVP con validazione
- [ ] Implementare stati form (loading, success, error)
- [ ] Setup backend per invio email
- [ ] Aggiungere database per storage RSVP

### Fase 4: Styling e Animazioni
- [ ] Applicare glassmorphism effects
- [ ] Implementare animazioni on load
- [ ] Aggiungere micro-interazioni hover
- [ ] Ottimizzare responsive design

### Fase 5: Ottimizzazione e Deploy
- [ ] Comprimere e ottimizzare video
- [ ] Performance audit con Lighthouse
- [ ] Test cross-browser e dispositivi
- [ ] Setup hosting e dominio
- [ ] Configurare analytics

## 💡 Note Importanti per l'Implementazione

### Priorità Assolute
1. **Video non deve bloccare il rendering iniziale**
2. **Testo sempre leggibile indipendentemente dal video**
3. **Form deve essere funzionante al 100%**
4. **Mobile experience deve essere perfetta**

### Fallback e Accessibilità
- **No JavaScript:** Form deve funzionare comunque
- **No video support:** Immagine statica di fallback
- **Screen readers:** ARIA labels appropriati
- **Keyboard navigation:** Tutti elementi accessibili

### Testing Essenziale
- **Browser:** Chrome, Safari, Firefox, Edge
- **Dispositivi:** iPhone, Android, iPad, Desktop
- **Network:** 3G, 4G, WiFi per video loading
- **Form:** Test invio con email reali

---

## 📝 Istruzioni Finali per Cursor

Questo documento contiene tutte le specifiche necessarie per ricreare la landing page. Segui questo ordine di implementazione:

1. **Prima crea la struttura HTML semantica**
2. **Poi aggiungi il video background con overlay**
3. **Implementa il layout e posizionamento elementi**
4. **Aggiungi styling e glassmorphism effects**
5. **Sviluppa il form RSVP funzionante**
6. **Implementa animazioni e micro-interazioni**
7. **Ottimizza per mobile e performance**

Ricorda: l'obiettivo è mantenere l'atmosfera misteriosa ed esclusiva dell'originale, migliorandola con un video background coinvolgente. Less is more - mantieni il design pulito e l'esperienza fluida.