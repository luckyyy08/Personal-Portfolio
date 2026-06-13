# 🚀 Premium Developer Portfolio - Lokesh Ahire

This is a premium, recruiter-ready software developer portfolio built using **Next.js (App Router)**, **Tailwind CSS v4**, and **Framer Motion**.

It replaces the previous static Bootstrap layout with modern glassmorphic designs, scroll reveal animations, and an interactive developer shell console HUD.

---

## 🛠️ Tech Stack & Dependencies

- **Core Framework**: React.js / Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (native CSS configuration)
- **Animations**: Framer Motion
- **Icons**: Lucide React & Custom Brand SVGs
- **Backend Email**: FormSubmit.co integration
- **Assets**: Structured in `public/` (project captures, profile photo, and PDF resume)

---

## ⚡ Local Development

To run the application locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the interactive portfolio.

---

## 📦 Production Compilation

Verify correct compilation:
```bash
npm run build
```

---

## ☁️ Deploying to Vercel (Vercel वर अपलोड कसे करायचे, भाऊ!)

Since this portfolio is built with Next.js, it is native to Vercel and can be deployed in a couple of minutes:

### Option 1: Deploying via GitHub (Recommended)
1. **Stage and commit your changes** in Git:
   ```bash
   git add .
   git commit -m "Upgrade portfolio to premium Next.js and Tailwind CSS"
   ```
2. **Push the code** to your GitHub repository (e.g. `luckyyy08/Personal-Portfolio`):
   ```bash
   git push origin main
   ```
3. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New** -> **Project**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Next.js** as the framework.
6. Click **Deploy**. Vercel will build and host your portfolio on a custom domain!

### Option 2: Deploying via Vercel CLI
If you want to deploy directly from your command line:
1. Run `npx vercel` in this folder.
2. Log in, follow the simple command-line prompts, and choose default options.
3. Once the deployment finishes, run `npx vercel --prod` to deploy to production.
