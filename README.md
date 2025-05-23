# Paty

Une application de coaching sportif basée sur React.

Ce dépôt contient une configuration minimale de React + Vite pour le projet iPaty.

## Bien démarrer

Installez les dépendances (nécessite un accès réseau) :

```bash
npm install
```

Lancez le serveur de développement :

```bash
npm run dev
```

### Démarrer la page d'administration

Une interface d'administration est disponible pour gérer le contenu de l'application.
Depuis le dossier `app`, lancez le serveur local et accédez ensuite à `http://localhost:5173/admin` :

```bash
cd app
npm run dev
```

### Démarrer le serveur Stripe

Un petit serveur Express est fourni pour la création des sessions de paiement. Configurez votre clé secrète Stripe dans la variable `STRIPE_SECRET_KEY` puis lancez :

```bash
cd server && npm install
npm start
```

### Variables d'environnement Stripe



```bash
STRIPE_SECRET_KEY=your_secret_key
STRIPE_BASIC_PRICE_ID=price_for_basic
STRIPE_PREMIUM_PRICE_ID=price_for_premium
STRIPE_ANNUAL_PRICE_ID=price_for_annual
SUCCESS_URL=http://localhost:5173/dashboard?session_id={CHECKOUT_SESSION_ID}
CANCEL_URL=http://localhost:5173/subscribe
# facultatif : utiliser CLIENT_BASE_URL pour dériver les deux URL
CLIENT_BASE_URL=http://localhost:5173
```

Vous pouvez aussi personnaliser le port du serveur avec la variable optionnelle `PORT`.

Pour le client React, créez également un fichier `app/.env` avec :

```bash
VITE_STRIPE_PUBLIC_KEY=pk_test_your_public_key
```


### Variables d'environnement CDN

L'application peut envoyer des fichiers vers un CDN. Configurez les variables suivantes dans un fichier `.env` :

- `CDN_BASE_URL` : URL du service CDN
- `CDN_API_KEY` : clé d'authentification

Ces valeurs seront utilisées par le serveur lors des opérations d'upload.

### Lancer l'endpoint d'upload

Un endpoint `/upload` est exposé par le serveur pour transférer des fichiers vers le CDN. Après avoir défini les variables d'environnement ci-dessus :

```bash
cd server
npm start
```

Vous pouvez ensuite envoyer vos fichiers via une requête HTTP POST sur `http://localhost:4242/upload`.

=======
Pour l'upload de vidéos vers le CDN, définissez également dans `server/.env` les variables :

```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Ces variables sont également présentes dans `server/.env.example`.


### Builds mobiles Capacitor

Ce projet est configuré avec Capacitor pour générer les applications iOS et Android natives.

1. Construisez l'application web :

```bash
npm run build
```

2. Synchronisez les assets avec Capacitor :

```bash
npm run cap:sync
```

3. Ajoutez la plateforme Android ou iOS si ce n'est pas déjà fait :

```bash
npx cap add android
# et/ou
npx cap add ios
```

4. Ouvrez ensuite le projet natif dans Android Studio ou Xcode :

```bash
npm run cap:android
# ou
npm run cap:ios
```

Assurez-vous d'avoir les outils de développement Android/iOS installés pour lancer les builds mobiles.
Pour profiter d'une expérience PWA installable de manière autonome, prévoyez également un manifest web et un service worker.

## Licence

Ce projet est distribué sous la licence MIT.
