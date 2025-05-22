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

### Démarrer le serveur Stripe

Un petit serveur Express est fourni pour la création des sessions de paiement. Configurez votre clé secrète Stripe dans la variable `STRIPE_SECRET_KEY` puis lancez :

```bash
cd server && npm install
npm start
```

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

3. Ouvrez le projet natif dans Android Studio ou Xcode :

```bash
npm run cap:android
# ou
npm run cap:ios
```

Assurez-vous d'avoir les outils de développement Android/iOS installés pour lancer les builds mobiles.

## Licence

Ce projet est distribué sous la licence MIT.
