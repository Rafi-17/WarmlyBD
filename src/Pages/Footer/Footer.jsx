import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md text-gray-800 py-8">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 flex flex-col sm:flex-row justify-between gap-10">
        {/* Logo & About */}
        <aside className="flex-1">
          <h2 className="text-2xl font-bold mb-2">WarmlyBD</h2>
          <p className="text-sm">
            Sharing warmth across Bangladesh, one winter at a time.
          </p>
        </aside>

        {/* Quick Links */}
        <nav className="flex-1">
          <h6 className="footer-title mb-2">Quick Links</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#how" className="hover:underline">How It Works</a></li>
            <li><a href="#donate" className="hover:underline">Donate Clothes</a></li>
            <li><a href="#volunteer" className="hover:underline">Volunteer</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Social Links */}
        <nav className="flex-1">
          <h6 className="footer-title mb-2">Follow Us</h6>
          <div className="flex gap-4">
            {/* Facebook */}
            <a href="#" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                className="fill-current">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.01 3.66 9.15 8.44 9.93v-7.03H8.07v-2.9h2.37V9.41c0-2.34 1.4-3.64 3.53-3.64 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.58l-.41 2.9h-2.17v7.03C18.34 21.22 22 17.08 22 12.07z"/>
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                className="fill-current">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 0 0 1.88-2.35c-.84.5-1.76.85-2.75 1.05A4.22 4.22 0 0 0 16.1 4c-2.33 0-4.22 1.89-4.22 4.22 0 .33.04.66.1.97-3.5-.18-6.6-1.85-8.67-4.4-.36.62-.57 1.35-.57 2.12 0 1.46.74 2.75 1.86 3.5a4.2 4.2 0 0 1-1.91-.53v.05c0 2.04 1.45 3.74 3.37 4.12-.35.1-.72.16-1.1.16-.27 0-.53-.03-.79-.07.53 1.66 2.08 2.87 3.92 2.91A8.47 8.47 0 0 1 2 19.54 11.9 11.9 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                className="fill-current">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        <p>© {new Date().getFullYear()} WarmlyBD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
