# TimeTrackerFrontend

En enkel tidsrapporteringsapplikation byggd med React och TypeScript.

## Funktioner
- Skapa konto och logga in
- Skapa och hantera kategorier
- Tidsrapportering (checka in/ut på kategori)
- Veckosammanfattning/statistik

## Kom igång

### 1. Klona repot
```bash
 git clone <repo-url>
 cd timetrackerFrontend
```

### 2. Installera beroenden
```bash
npm install
```

### 3. Starta utvecklingsservern
```bash
npm run dev
```

Frontend körs nu på [http://localhost:5173](http://localhost:5173)

### 4. Backend
Se till att backend-servern är igång på `http://localhost:8080` (eller ändra API_URL i services-filerna).

## Struktur
- `src/components/` – React-komponenter
- `src/services/` – API-anrop
- `src/types/` – TypeScript-typer
- `src/styles/` – CSS

## Byggd med
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
