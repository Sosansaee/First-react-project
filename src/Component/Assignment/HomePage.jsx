
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { name: "Library", href: "#library" },
  { name: "Benefits", href: "#benefits" },
  { name: "Palette", href: "#palette" },
  { name: "Stories", href: "#stories" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07152f] text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06132c]/95 via-[#09295b]/75 to-[#06132c]/45" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-50 mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-6 md:px-10"
      >
        {/* Logo - Left */}
        <a href="#home" className="justify-self-start">
          <span className="block font-serif text-2xl">Recueil</span>
          <span className="mt-1 block text-[9px] text-white/75">
            ✦ A new fragrance, every month
          </span>
        </a>

        {/* Desktop Links - Center */}
        <div className="hidden items-center justify-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-xs text-white/90 transition-colors duration-300 hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-self-end">
          {/* Subscribe Button */}
          <a
            href="#pricing"
            className="hidden rounded-full bg-cyan-300 px-6 py-3 text-[10px] font-semibold tracking-widest text-[#07152f] transition-colors duration-300 hover:bg-white lg:inline-flex"
          >
            SUBSCRIBE
          </a>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/40 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute left-4 right-4 top-full flex flex-col items-center gap-5 rounded-2xl border border-white/15 bg-[#07152f]/95 p-6 shadow-xl backdrop-blur-md lg:hidden"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-center text-sm text-white/90 transition-colors hover:text-cyan-300"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-cyan-300 px-6 py-3 text-center text-xs font-semibold tracking-widest text-[#07152f]"
              >
                SUBSCRIBE
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl flex-col justify-center px-6 pb-12 pt-12 md:min-h-[570px] md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="font-light leading-[1.08] tracking-tight text-white">
            <span className="block text-5xl sm:text-6xl lg:text-7xl">
              Find your <span className="italic">scent.</span>
            </span>

            <span className="mt-2 block text-4xl sm:text-5xl lg:text-7xl">
              One bottle at a time.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-sm leading-6 text-white/80">
            A monthly fragrance club from the Lumen atelier. Each delivery
            brings a hand-picked bottle to your door, chosen just for you.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href="#pricing"
              className="rounded-full bg-cyan-200 px-7 py-4 text-[10px] font-semibold tracking-widest text-[#07152f] transition-colors duration-300 hover:bg-white"
            >
              START YOUR SUBSCRIPTION
            </a>

            <a
              href="#how-it-works"
              className="text-[10px] font-semibold tracking-widest text-white transition-colors duration-300 hover:text-cyan-300"
            >
              HOW IT WORKS
            </a>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/20 pt-7 sm:grid-cols-4 sm:gap-5"
        >
          {[
            { number: "60", title: "Parfums library" },
            { number: "180", title: "Hours per batch" },
            { number: "42", title: "Sourced ingredients" },
            { number: "12", title: "Partner grow" },
          ].map((item) => (
            <div key={item.number} className="flex items-start gap-3">
              <span className="font-serif text-3xl text-white">
                {item.number}
              </span>
              <div>
                <h3 className="font-serif text-sm italic text-white/90">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] leading-4 text-white/65">
                  Carefully selected for your fragrance experience.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
