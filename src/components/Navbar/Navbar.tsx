

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [navbarHeight, setNavbarHeight] = useState(0);

//   const navbarRef = useRef<HTMLDivElement>(null);

//   // Handle scroll for blur/shadow
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Update navbar height dynamically
//   useEffect(() => {
//     if (navbarRef.current) {
//       setNavbarHeight(navbarRef.current.offsetHeight);
//     }
//     // Update on window resize
//     const handleResize = () => {
//       if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isScrolled]);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   return (
//     <>
//       {/* Navbar */}
//     <nav
//   ref={navbarRef}
// className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//   isScrolled
//     ? "backdrop-blur-lg bg-white/30 shadow-md border-b border-white/20 py-2 md:py-2"
//     : "bg-black py-2 md:py-4"
// }`}

//   style={{
//     backdropFilter: isScrolled ? "blur(10px)" : "none", // only blur on scroll
//     WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
//   }}
// >

//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo */}
//          <Link href="/" className="flex items-center gap-3">
//   <img
//     src="/images/Group 11.png"
//     alt="Logo"
//     className="h-20 w-20 object-contain"
//   />
// <span
//   className={`hidden md:inline text-2xl font-bold transition-colors duration-300 ${
//     isScrolled ? "text-black hover:text-[#574656]" : "text-[#f1eeeb] hover:text-purple-300"
//   }`}
// >
//   The Dream Chapters
// </span>

// </Link>
// {/* Desktop Menu */}
// <div className="hidden md:flex space-x-8">
//   {[
//     { href: "/", label: "Home" },
//     { href: "/services", label: "Our Services" },
//     { href: "/About", label: "About Us" },
//     { href: "/contact", label: "Contact Us" },
//   ].map(({ href, label }) => (
//     <Link
//       key={href}
//       href={href}
//       className={`relative font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#574656] after:transition-all hover:after:w-full ${
//         isScrolled
//           ? "text-black hover:text-[#574656]"
//           : "text-[#f2eeec] hover:text-purple-300"
//       }`}
//     >
//       {label}
//     </Link>
//   ))}
// </div>


//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-[#f3efeb] focus:outline-none"
//             onClick={toggleMobileMenu}
//             aria-label="Toggle Mobile Menu"
//             aria-expanded={isMobileMenuOpen}
//           >
//             {isMobileMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden fixed top-[64px] left-0 w-full backdrop-blur-xl bg-black/70 border-t border-white/10 z-50">
//             <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
//               {[
//                 { href: "/", label: "Home" },
//                 { href: "/services", label: "Our Services" },
//                 { href: "/About", label: "About Us" },
//                 { href: "/contact", label: "Contact" },
            
//               ].map(({ href, label }) => (
//                 <Link
//                   key={href}
//                   href={href}
//                   className="text-white text-lg font-medium hover:text-purple-300 transition-colors"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Spacer to prevent content being hidden behind fixed navbar */}
//       <div style={{ height: navbarHeight }} />
//     </>
//   );
// };

// export default Navbar;

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 For detecting current route

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const pathname = usePathname(); // 👈 current active route
  const navbarRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update navbar height
  useEffect(() => {
    if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);
    const handleResize = () => {
      if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isScrolled]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-white/30 shadow-md border-b border-white/20 py-2 md:py-2"
            : "bg-black py-2 md:py-4"
        }`}
        style={{
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/Group 11.jpg"
              alt="Logo"
              className="h-20 w-20 object-contain"
            />
            <span
              className={`hidden md:inline text-2xl font-bold transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-[#574656]"
                  : "text-[#f1eeeb] hover:text-purple-300"
              }`}
            >
              The Dream Chapters
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Our Services" },
              { href: "/About", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => {
              const isActive = pathname === href; // 👈 active route check
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[#574656] text-white shadow-md"
                      : isScrolled
                      ? "text-black hover:text-[#574656] hover:bg-gray-100"
                      : "text-[#f2eeec] hover:text-purple-300 hover:bg-[#574656]/40"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f3efeb] focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[64px] left-0 w-full backdrop-blur-xl bg-black/70 border-t border-white/10 z-50">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/About", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#574656] text-white"
                        : "text-white hover:text-purple-300 hover:bg-[#574656]/40"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div style={{ height: navbarHeight }} />
    </>
  );
};

export default Navbar;
