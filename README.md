# iPaty Application

Cette application React fournit l'interface utilisateur principale de la plateforme de coaching iPaty. La landing page n'est pas incluse dans ce dépôt. L'application permet aux utilisateurs de se connecter, de gérer leur abonnement et d'accéder à leurs programmes d'entraînement. Une interface simplifiée d'ajout de contenu est également proposée pour le coach.

## Installation

Les dépendances sont listées dans `package.json`. Dans un environnement disposant d'un accès réseau, lancez:

```bash
npm install
```

## Scripts

- `npm start` – démarre le serveur de développement
- `npm build` – crée la version de production
- `npm test` – lance les tests (placeholder)

## Fonctionnalités principales

- Authentification utilisateur simplifiée
- Gestion de plusieurs pages via React Router
- Affichage de programmes selon le niveau
- Interface d'administration pour le coach (ajout d'exercices)
- Gestion basique du compte et de l'abonnement

Cette version reste minimale et sert de base pour intégrer la logique métier réelle (Stripe, stockage des programmes, etc.).
