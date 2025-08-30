---
trigger: always_on
---

# 🌐 Windsurf Project Rules – Unified Orders Dashboard

These rules apply to the **Unified Orders Dashboard** project, built with **Next.js + Tailwind CSS** using mock data for APAC, UK, and US commerce instances.

---

## 🔄 Project Awareness & Context
- **Always read `PLANNING.md`** at the start of a new conversation to understand the project’s goals, architecture, and assumptions.  
- **Check `TASK.md`** before coding. If a task is missing, add it with today’s date.  
- **Follow consistent naming conventions** for components, data files, and folders (`lib/`, `components/`, `pages/`).  

---

## 🧱 Code Structure & Modularity
- **Never allow a single file to exceed 500 lines.** Split into modules or smaller components.  
- **Organise code by responsibility**:
  - `/components` → UI components (tables, cards, charts if added later)  
  - `/lib` → mock data generators & utilities  
  - `/pages` → Next.js routes  
  - `/tests` → unit tests mirroring structure  
- **Prefer functional components** with hooks (`useState`, `useEffect`).  

---

## 🧪 Testing & Reliability
- Add unit tests in `/tests` for each new feature.  
- For each component or function, include at least:
  - **1 happy path** (expected use case)  
  - **1 edge case**  
  - **1 failure case** (ensuring graceful handling)  
- Mock all data via `faker-js` instead of hardcoding inline test data.  

---

## ✅ Task Completion
- **Mark tasks as done in `TASK.md`** immediately after finishing them.  
- Add new discoveries under **“Discovered During Work”** in `TASK.md`.  

---

## 🎨 Style & Conventions
- Use **React + Next.js** for framework and **Tailwind CSS** for UI.  
- Prefer utility-first Tailwind classes over inline styles.  
- Use semantic HTML tags for accessibility (e.g., `<main>`, `<header>`, `<table>`).  
- Format code with Prettier (`npm run lint -- --fix` if ESLint is added).  

---

## 📚 Documentation & Explainability
- **Update `README.md`** whenever dependencies change, new features are added, or setup steps are modified.  
- **Comment non-obvious logic** (e.g., sorting/filtering orders, merging datasets).  
- Use inline `// Reason:` comments to document design decisions.  

---

## 🧠 AI Behavior Rules
- **Never hallucinate libraries.** Only use confirmed dependencies (`next`, `react`, `tailwindcss`, `@faker-js/faker`).  
- **Ask questions if uncertain** instead of assuming.  
- **Do not overwrite or delete files** unless explicitly instructed.  
- **Always ensure imports resolve** to actual files/components.  

---

## 📎 Deployment & Deliverables
- The project must be runnable with:
  ```bash
  npm install
  npm run dev
