# express-typescript-eslint-prettier-template

An Node22, Express.js template with TypeScript, ESLint and Prettier

### Source

[Doc for setting the template](https://medium.com/@gabrieldrouin/node-js-2025-guide-how-to-setup-express-js-with-typescript-eslint-and-prettier-b342cd21c30d)

## Scripts disponibles

Ce projet utilise plusieurs scripts npm pour différentes tâches :

### Développement

#### `npm run dev`

```bash
tsx --watch src/index.ts
```

- Lance l'application en mode développement
- Surveille les modifications des fichiers
- Redémarre automatiquement le serveur

### Production

#### `npm start`

```bash
node dist/index.js
```

- Lance l'application en production depuis les fichiers compilés

#### `npm run build`

```bash
tsc
```

- Compile le code TypeScript en JavaScript
- Génère les fichiers dans le dossier `dist`

### Vérification et qualité du code

#### `npm run type-check`

```bash
tsc --noEmit
```

- Vérifie la typologie TypeScript
- Ne génère pas de fichiers JavaScript

#### `npm run lint`

```bash
eslint .
```

- Analyse le code pour détecter les erreurs potentielles
- Vérifie le respect des règles ESLint

#### `npm run lint:fix`

```bash
eslint --fix .
```

- Corrige automatiquement les erreurs ESLint quand possible

### Formatage du code

#### `npm run format`

```bash
prettier --write .
```

- Formate automatiquement tous les fichiers du projet
- Applique les règles Prettier configurées

#### `npm run format:check`

```bash
prettier --check .
```

- Vérifie si les fichiers respectent le formatage Prettier
- Ne modifie pas les fichiers

### Tests

#### `npm test`

- Actuellement configuré pour retourner une erreur
- À configurer selon les besoins du projet

## Utilisation

1. Pour développer :

```bash
npm run dev
```

2. Pour déployer en production :

```bash
npm run build
npm start
```

3. Pour vérifier la qualité du code :

```bash
npm run type-check
npm run lint
npm run format:check
```

4. Pour corriger automatiquement le code :

```bash
npm run lint:fix
npm run format
```
