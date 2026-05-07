import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white border-t-2 border-white py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/50">
          <span>🌼 daisy</span>
          <span>&middot;</span>
          <span>Made with love</span>
        </div>
        
        <div className="flex items-center gap-4 text-white/50 text-sm font-sans">
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <span>&middot;</span>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <span>&middot;</span>
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <span>&middot;</span>
          <span>&copy; 2026</span>
        </div>
      </div>
    </footer>
  );
}
