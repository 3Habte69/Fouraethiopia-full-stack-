# Fouraethiopia (Next.js + MongoDB)

A Vercel-friendly app for university past exams, quizzes, and leaderboard.

## Features
- Next.js App Router with API routes
- MongoDB (Mongoose) models
- JWT auth (register/login)
- Exams CRUD (admin), quiz attempts, leaderboard
- Minimal React UI

## Quick Start (Local)
```bash
cp .env.example .env.local
# edit MONGODB_URI & JWT_SECRET
npm install
npm run dev
```

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. Import the repo in Vercel.
3. Set Environment Variables in Vercel:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NEXT_PUBLIC_APP_NAME` (optional)
   - `ADMIN_EMAIL` and `ADMIN_PASSWORD` (optional seeding—currently unused)
4. Deploy.

## Notes
- You must provide a valid MongoDB Atlas connection string to use in production.
- Tokens are stored in `localStorage` for demo purposes. For production, consider HttpOnly cookies.
- Tailwind is optional; basic CSS included.

## New in this build
- **Google Sign-In** (Google Identity Services). Backend verifies Google ID token and issues app JWT.
- **File uploads to Vercel Blob** with signed upload URLs; PDF link stored on exams.
- **Richer Admin UI**: PDF upload + full question editor.

### Additional Env Vars
- `GOOGLE_CLIENT_ID` — from Google Cloud Console (OAuth client, Web).
- `VERCEL_BLOB_RW_TOKEN` — Generate in Vercel: Storage → Blob → Generate Read-Write token.
- Optional `NEXT_PUBLIC_GOOGLE_CLIENT_ID` if you prefer to expose the client ID on the client (safe).

### Notes
- After Google login, the backend returns your app's JWT, stored in `localStorage`.
- Uploads require `VERCEL_BLOB_RW_TOKEN` set in Vercel. The endpoint returns a single-use URL; client uploads directly.

## Admin Whitelist
- Set `ADMIN_EMAILS` to a comma-separated list of admin emails (e.g., `admin1@example.com,admin2@example.com`).
- When a user registers or signs in with Google and their email matches, they get `role=admin` automatically.

## Exam Metadata & Filters
- Exam fields now include: `university`, `department`, `course`, `category`, `semester`.
- `/api/exams` accepts query params: `subject`, `university`, `category`, `semester`, `year`.
- The `/exams` page has a filter UI for these fields.

## Browse & PDF Viewer
- New `/browse` page to explore by University / Department / Course with Ethiopia presets.
- Exam detail page `/exams/[id]` includes an embedded PDF viewer (iframe) when `fileUrl` is present.
