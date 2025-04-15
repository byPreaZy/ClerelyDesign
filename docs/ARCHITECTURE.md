# Architecture du Projet

## Structure des Dossiers

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants UI réutilisables
│   ├── features/       # Composants spécifiques aux fonctionnalités
│   ├── context/        # Contextes React
│   ├── sections/       # Sections de page
│   └── layout/         # Composants de mise en page
├── pages/              # Pages de l'application
├── assets/             # Ressources statiques
│   ├── styles/         # Styles CSS/SCSS
│   ├── hooks/          # Hooks personnalisés
│   ├── utils/          # Fonctions utilitaires
│   └── svg/            # Images SVG
└── __tests__/          # Tests
```

## Technologies Utilisées

- React
- Tailwind CSS
- JavaScript/TypeScript
- Jest pour les tests

## Patterns d'Architecture

1. **Composants**
   - Structure atomique
   - Props typées
   - Gestion d'état locale

2. **État Global**
   - Context API
   - Hooks personnalisés

3. **Routing**
   - React Router
   - Routes protégées

4. **Styles**
   - Tailwind CSS
   - Composants stylisés

## Standards de Code

- ESLint
- Prettier
- Tests unitaires
- Documentation JSDoc

## Performance

- Lazy loading
- Code splitting
- Optimisation des images
- Caching

## Sécurité

- Validation des données
- Protection XSS
- Gestion des tokens
- Sanitization

## Accessibilité

- ARIA labels
- Navigation au clavier
- Contraste des couleurs
- Support des lecteurs d'écran 