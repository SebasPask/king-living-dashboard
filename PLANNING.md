# 📋 PLANNING.md – Unified Orders Dashboard

## 🎯 Project Purpose
Create a **Proof of Concept (POC)** dashboard to display orders from three separate commerce instances (APAC, UK, US) in a **single unified view**.  
The dashboard should simulate data using **faker-js** and present results in a clean, responsive UI suitable for an office display.

---

## 🏗️ Architecture Overview
- **Framework**: Next.js (React-based, supports SSR/SSG if needed)
- **Styling**: Tailwind CSS for responsive, utility-first design
- **Data Layer**: Mocked order data using `@faker-js/faker`
- **Component Layout**:
  - `components/` → Reusable UI (tables, region filters, future charts)
  - `lib/` → Data generators & utilities
  - `pages/` → Next.js routes (starting with `/index.js`)
  - `tests/` → Jest/React Testing Library for unit tests

---

## 📦 Tech Stack
- **Frontend**: React (via Next.js)
- **UI**: Tailwind CSS
- **Mock Data**: @faker-js/faker
- **Language**: JavaScript (option to extend with TypeScript if required)
- **Testing**: Jest + React Testing Library (optional but recommended)

---

## 📊 Dashboard Features
- Display orders in a **table** with the following fields:
  - Order ID  
  - Customer Name  
  - Product  
  - Amount  
  - Date  
  - Region (APAC, UK, US)  
- Simple UI that is **readable at a glance** (large fonts, good spacing).
- Region highlighted for clarity.

---

## 🧩 Future Extensions (if asked in interview live coding)
- Filtering by region
- Sorting by date or amount
- Aggregate statistics (e.g., total revenue by region)
- Live API integration instead of mock data
- Charts/visualisations (bar chart, pie chart)

---

## 📝 Assumptions
- Real APIs are not accessible → Mock data must be used.
- No authentication/authorisation is required.
- Focus is on **clarity and readability** rather than full feature depth.
- Deployment is not required for POC, only a **GitHub repo** and **README.md**.

---

## 📚 References
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [faker-js Documentation](https://fakerjs.dev/)

---

## ✅ Success Criteria
- Orders from all three regions are visible **in one unified dashboard**.
- Codebase is modular and follows Windsurf **RULES.md** guidelines.
- `README.md` includes:
  - AI prompts used
  - Technical design decisions
  - Setup instructions
  - Assumptions
  - Reflection on AI usage

