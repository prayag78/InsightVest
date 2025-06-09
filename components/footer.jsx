"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] py-12 text-sm text-gray-400 border-t border-zinc-800">
      <div className="container mx-auto px-4 text-center space-y-3">
      {/* Optional logo or site name */}
      <div className="text-xl font-bold text-emerald-400 tracking-tight">
        INSIGHTVEST
      </div>

      <p className="text-gray-500">
        AI-enhanced expense tracking with smart receipt scanning and monthly
        summaries.
      </p>

      {/* <div className="flex justify-center gap-6 text-xs text-muted-foreground">
        <a href="/privacy" className="hover:text-white transition">
          Privacy
        </a>
        <a href="/terms" className="hover:text-white transition">
          Terms
        </a>
        <a href="/about" className="hover:text-white transition">
          About
        </a>
      </div> */}

      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} InsightVest. All rights reserved.
      </p>
    </div>
  </footer>
  );
}
