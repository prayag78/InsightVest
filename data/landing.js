  import {
    BarChart3,
    Receipt,
    ClipboardList,
    CalendarCheck2,
    FolderKanban,
    Sparkles,
    CreditCard,
    PieChart,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "50K+",
      label: "Active Users",
    },
    {
      value: "$2B+",
      label: "Transactions Tracked",
    },
    {
      value: "99.9%",
      label: "Uptime",
    },
    {
      value: "4.9/5",
      label: "User Rating",
    },
  ];
  
  // Features Data

  
  export const featuresData = [
    {
      icon: <Receipt className="h-9 w-9 text-emerald-400 drop-shadow" />,
      title: "AI Receipt Scanning",
      description:
        "Snap, scan, and save. Let our AI handle your receipts in seconds — no more manual entry.",
    },
    {
      icon: <ClipboardList className="h-9 w-9 text-green-300 drop-shadow" />,
      title: "Clean Transaction Logs",
      description:
        "Track every spend with crystal-clear records. Filter, search, and stay on top with ease.",
    },
    {
      icon: <CalendarCheck2 className="h-9 w-9 text-teal-400 drop-shadow" />,
      title: "Monthly Financial Reports",
      description:
        "Auto-generated summaries every month so you can reflect, review, and refine your money habits.",
    },
    {
      icon: <FolderKanban className="h-9 w-9 text-cyan-300 drop-shadow" />,
      title: "Smart Categorization",
      description:
        "Transactions are sorted by context — groceries, rent, travel, or even that midnight snack run.",
    },
    {
      icon: <BarChart3 className="h-9 w-9 text-sky-400 drop-shadow" />,
      title: "Visual Insights",
      description:
        "Beautiful charts that show you where your money's going. Numbers made understandable.",
    },
    {
      icon: <Sparkles className="h-9 w-9 text-indigo-300 drop-shadow" />,
      title: "Zero Learning Curve",
      description:
        "Just log in and go. It’s built to feel intuitive, clean, and fast for real people like you.",
    },
  ];
  
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "1. Create Your Account",
      description:
        "Get started in minutes with our simple and secure sign-up process",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "2. Track Your Spending",
      description:
        "Automatically categorize and track your transactions in real-time",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "3. Get Insights",
      description:
        "Receive AI-powered insights and recommendations to optimize your finances",
    },
  ];
  
  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Aarav Mehta",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      quote:
        "INSIGHTVEST makes tracking business expenses ridiculously easy. AI receipt scanning and monthly breakdowns save me hours every week.",
    },
    {
      name: "Riya Kapoor",
      role: "Student & Budget Tracker",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "I used to forget where my money went. With INSIGHTVEST, I just upload receipts and it auto-generates my monthly report — super helpful!",
    },
    {
      name: "Devansh Patel",
      role: "Remote Freelancer",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      quote:
        "I love how simple and clean INSIGHTVEST is. No bloated features — just what I need: smart transaction logging and real insights.",
    },
  ];
  
  