import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-surface">
      <nav className="mx-auto flex max-w-[1600px] flex-col gap-5 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 md:py-6">
        {/* Logo */}
        <a
          href="#"
          className="self-center text-3xl font-display text-primary md:self-auto"
        >
          Ayecan
        </a>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-end md:gap-6">
          <Link
            to="/"
            className="text-base text-on-surface-variant link-underline sm:text-lg md:text-xl"
          >
            Inicio
          </Link>

          <Link
            to="/institucion"
            className="text-base text-on-surface-variant link-underline sm:text-lg md:text-xl"
          >
            Nuestra institución
          </Link>

          <Link
            to="/propuesta"
            className="text-base text-on-surface-variant link-underline sm:text-lg md:text-xl"
          >
            Propuesta
          </Link>

          <Link
            to="/equipo"
            className="text-base text-on-surface-variant link-underline sm:text-lg md:text-xl"
          >
            Equipo
          </Link>

          <Link
            to="/contacto"
            className="rounded-lg bg-primary px-4 py-2 text-base font-medium text-on-primary transition-shadow hover:shadow-card btn-primary sm:px-5 sm:py-3 sm:text-lg md:text-xl"
          >
            Contáctanos
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
