
# AI Elite Trading – Complete Hosting Guide (Render + PostgreSQL + Mailgun)

This guide walks you through deploying the full AI Elite Trading app on Render.com, with PostgreSQL and custom domain support.

---

## 1. Create Accounts

- [Render.com](https://render.com/) – For hosting backend and frontend
- [Mailgun.com](https://www.mailgun.com/) – For email service (contact form)
- [Supabase.io](https://supabase.io/) or Render PostgreSQL – For database
- [Polygon.io](https://polygon.io/) or similar for financial data (optional)
- A Domain Provider (ex: GoDaddy, Namecheap) if using a custom domain

---

## 2. Deploy the PostgreSQL Database

### Option A – Render PostgreSQL:
1. Go to **Render Dashboard > New > PostgreSQL**.
2. Name it `ai_elite_trading`.
3. Copy the connection string (something like: `postgres://user:pass@host:port/db`).

### Option B – Supabase:
1. Create a new project.
2. Copy the connection URL in `Settings > Database`.

3. Connect with `psql` locally and run:

```bash
psql YOUR_CONNECTION_URL -f database/init.sql
```

---

## 3. Deploy the Backend (Node.js + Express)

1. On **Render Dashboard > New > Web Service**
2. Connect your GitHub or upload manually the `backend` folder.
3. Name: `ai-elite-backend`
4. Runtime: **Node**
5. Start Command:

```bash
node server.js
```

6. Add Environment Variables:

```
PORT=10000
DATABASE_URL=YOUR_DATABASE_URL
MAILGUN_API_KEY=YOUR_MAILGUN_KEY
```

7. Deploy and wait for the success message.

---

## 4. Deploy the Frontend (React)

1. On **Render Dashboard > New > Static Site**
2. Name: `ai-elite-frontend`
3. Root Directory: `frontend`
4. Build Command:

```bash
npm install && npm run build
```

5. Publish Directory: `build`
6. Environment Variable (optional):

```
REACT_APP_BACKEND_URL=https://ai-elite-backend.onrender.com
```

---

## 5. Connect Mailgun for Emails

- In `backend/server.js` or `contact.js`, configure Mailgun API for form handling.
- Set domain + key in environment variables.
- Use `mailgun-js` or `nodemailer`.

---

## 6. Custom Domain (Optional)

1. Go to `Settings > Custom Domain` on Render frontend service.
2. Add your domain (e.g., `ai-elitetrading.com`).
3. Follow Render's DNS setup instructions.
4. Wait for HTTPS to activate.

---

## 7. Test Deployment

- Visit the frontend URL.
- Test signup, login, and signal viewing.
- Check the backend route: `/api/signals/predict/BTC`

---

## 8. Bonus: Production Optimizations

- Add `PM2` or `Docker` for self-hosting.
- Enable CORS, rate limiting, logs.
- Use CDN (e.g., Cloudflare) for faster frontend delivery.
- Secure `.env` secrets.

---

You’re now ready to operate AI Elite Trading live!

