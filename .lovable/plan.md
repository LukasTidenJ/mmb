## Mål

1. Ta bort alla referenser till snickeri från hela sajten (text, bilder, metadata, ikoner).
2. Lägga till en ny sida **Våra arbeten** (`/vara-arbeten`) i toppnavigeringen som matchar resten av designen (vit/grå/orange). Sidan får platshållare nu – du fyller på med riktiga bilder senare.

## Förändringar

### 1. Rensa bort snickeri
- `src/routes/__root.tsx`: ta bort "snickeri" ur title/description/og/twitter och JSON-LD.
- `src/routes/index.tsx`: ta bort snickeri från hero-text, USP-listan och tjänste-korten (kortet "Snickeri" tas bort, ersätts av t.ex. "Anläggning" eller justeras till 2 kort).
- `src/routes/tjanster.tsx`: ta bort hela tjänstekortet "Snickeriarbeten" + uppdatera ingress/meta.
- `src/components/SiteFooter.tsx`: uppdatera ingress (utan snickeri).
- `src/components/HeroCarousel.tsx`: ta bort `snickeri.jpg` ur bildspelet.
- `src/assets/snickeri.jpg`: ta bort filen.

### 2. Ny sida: Våra arbeten
- Ny route `src/routes/vara-arbeten.tsx` med `createFileRoute("/vara-arbeten")`.
- Egen `head()` med titel/description/og för SEO.
- Innehåll:
  - Sidrubrik "Våra arbeten" + kort ingress.
  - Responsivt galleri-grid (1 kol mobil / 2 surfplatta / 3 desktop) med platshållarkort. Varje kort har bild, titel och kort beskrivning. Jag lägger 6 platshållare som du enkelt byter ut.
  - CTA-sektion längst ned ("Vill du ha något liknande utfört? Kontakta oss") som länkar till `/kontakt`.
- Samma designspråk som övriga sidor: vit bakgrund, grå kort, orange accenter, mjuka hovers (snabba transitions, inga långsamma animationer).

### 3. Navigering
- `src/components/SiteHeader.tsx`: lägg till länk "Våra arbeten" mellan **Tjänster** och **Kontakt** (både desktop- och mobilmeny).
- `src/components/SiteFooter.tsx`: lägg till länken i footerns navigation.

### Teknik
- Ren frontend-ändring, ingen backend.
- Filnamnet `vara-arbeten.tsx` ger URL `/vara-arbeten` (utan å för att undvika encodings­strul i URL).
- Bilder läggs som platshållare med `bg-muted` + ikon tills du skickar riktiga bilder. När du skickar bilderna lägger jag in dem via Lovable Assets.
