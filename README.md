# Paty

A React-based fitness coaching application.

This repository contains a minimal React + Vite setup for the iPaty project.

## Getting Started

Install dependencies (requires network access):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

### Capacitor Mobile Builds

This project is configured to use Capacitor so you can build native iOS and Android apps.

1. Build the web application:

```bash
npm run build
```

2. Sync the assets with Capacitor:

```bash
npm run cap:sync
```

3. Open the native project in Android Studio or Xcode:

```bash
npm run cap:android
# or
npm run cap:ios
```

Make sure you have the Android/iOS development tools installed to run the mobile builds.
