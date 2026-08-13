import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" bg-surface">
      <nav className="mx-auto flex max-w-[1600px] justify-between py-6 items-center">
        <a href="#" className=" text-3xl font-display text-primary">
          Ayecan
        </a>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-xl text-on-surface-variant link-underline"
          >
            Inicio
          </Link>

          <Link
            to="/institucion"
            className="text-xl text-on-surface-variant link-underline"
          >
            Nuestra institución
          </Link>

          <Link
            to="/propuesta"
            className="text-xl text-on-surface-variant link-underline"
          >
            Propuesta
          </Link>

          <Link
            to="/equipo"
            className="text-xl text-on-surface-variant link-underline"
          >
            Equipo
          </Link>
          <Link
            to="/contacto"
            className="rounded-lg bg-primary px-5 py-3 text-xl font-medium text-on-primary transition-shadow hover:shadow-card btn-primary"
          >
            Contáctanos
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
