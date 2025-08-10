# InsightVest

A modern, AI-powered personal finance management application. Featuring intelligent receipt scanning, automated recurring transactions, and comprehensive financial insights.

![InsightVest Landing Page](public/landing.png)

## 🚀 Features

### Core Functionality

- **AI Receipt Scanning** - Automatically extract transaction details from receipt photos using Google Gemini AI
- **Multi-Account Management** - Support for current and savings accounts with balance tracking
- **Smart Transaction Categorization** - Automatic categorization with manual override options
- **Recurring Transactions** - Set up and automate recurring payments with flexible intervals
- **Budget Tracking** - Monthly budget management with real-time progress monitoring
- **Financial Analytics** - Interactive charts and visual insights using Recharts
- **Monthly Reports** - AI-generated financial insights delivered via email

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router and Turbopack
- **React 18** - UI library with hooks and modern patterns
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **shadcn/ui** - Re-usable UI components
- **Lucide React** - Beautiful icon library

### Backend & Database

- **Prisma** - Type-safe database ORM with PostgreSQL
- **PostgreSQL** - Primary database for data persistence
- **Clerk** - Authentication and user management
- **Inngest** - Background job processing and automation
<!-- 
### AI & External Services

- **Google Gemini AI** - Receipt scanning and financial insights
- **Resend** - Email delivery service
- **React Email** - Email template system -->

<!-- ### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript** - Type safety
- **Docker** - Containerization support
- **Zod** - Schema validation -->

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd insightvest
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```env
   DATABASE_URL=your_postgresql_url
   DIRECT_URL=your_direct_db_url
   CLERK_SECRET_KEY=your_clerk_secret
   GEMINI_API_KEY=your_gemini_api_key
   INNGEST_EVENT_KEY=your_inngest_key
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
