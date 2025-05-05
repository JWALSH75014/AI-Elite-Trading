
# AI Elite Trading – Complete Deployment Guide (Web + Mobile)

This guide explains how to go from the ZIP file to a fully deployed website and mobile app (iOS + Android).

---

## PART 1 – WEBSITE DEPLOYMENT (Render.com)

### STEP 1: Create Accounts
- [Render](https://render.com/) – hosting for frontend/backend
- [Mailgun](https://www.mailgun.com/) – for contact form emails
- [GitHub](https://github.com/) – to push your code online
- [Domain provider] (optional) – for your custom domain

---

### STEP 2: Push Your Project to GitHub

```bash
unzip AI_Elite_Trading_Deployment_GitHubReady.zip
cd AI_Elite_Trading_Deployment
git init
git remote add origin https://github.com/YOUR_USERNAME/AI-Elite-Trading.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

---

### STEP 3: Deploy the Database on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Create a PostgreSQL database
3. Name: `ai_elite_trading`
4. Copy the database URL

---

### STEP 4: Deploy the Backend (API + AI)

1. New > Web Service > Connect your GitHub repo
2. Root directory: `backend`
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Environment Variables:
```
PORT=3000
DATABASE_URL=your_database_url_from_render
MAILGUN_API_KEY=your_mailgun_key
```

---

### STEP 5: Deploy the Frontend

1. New > Static Site > Connect your GitHub repo
2. Root directory: `frontend`
3. Build Command: `npm install && npm run build`
4. Publish Directory: `build`
5. Environment Variable:
```
REACT_APP_BACKEND_URL=https://your-backend.onrender.com
```

---

### STEP 6: Connect Domain (Optional)

1. In Render frontend > Settings > Custom Domains
2. Add your domain and follow DNS instructions

---

## PART 2 – MOBILE APPLICATION DEPLOYMENT (Expo React Native)

### STEP 1: Install Expo

```bash
npm install -g expo-cli
expo init ai-elite-mobile
```

Choose template: **blank (JavaScript)**

---

### STEP 2: Copy Mobile Code (To be generated separately)

You’ll get:
- `screens/` folder (Home, Login, Dashboard, Signal)
- `App.js` with navigation
- API calls to Render backend

---

### STEP 3: Connect to Backend API

In screens, use:

```js
fetch("https://your-backend.onrender.com/api/signals/active")
```

---

### STEP 4: Test Your App

```bash
cd ai-elite-mobile
expo start
```

Scan QR with Expo Go (iOS or Android)

---

### STEP 5: Build for Stores

```bash
npx expo build:android
npx expo build:ios
```

You’ll need:
- [Google Play Developer](https://play.google.com/console/) (25 $ one-time)
- [Apple Developer](https://developer.apple.com/) (99 $/year)

---

You're now ready to deploy both the web platform and the mobile app!

