const Navbar = () => {
  return (
    <header className=" bg-surface">
      <nav className="mx-auto flex max-w-7xl justify-between py-6">
        <a href="#" className=" text-3xl font-display text-primary">
          Ayecan
        </a>

        <div className="gap-10 md:flex">
          <a
            href="#inicio"
            className="text-xl text-on-surface-variant hover:text-primary"
          >
            Inicio
          </a>

          <a
            href="#institucion"
            className="text-xl text-on-surface-variant hover:text-primary"
          >
            Nuestra institución
          </a>

          <a
            href="#propuesta"
            className="text-xl text-on-surface-variant hover:text-primary"
          >
            Propuesta
          </a>

          <a
            href="#equipo"
            className="text-xl text-on-surface-variant hover:text-primary"
          >
            Equipo
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-lg bg-primary px-5 py-3 text-xl font-medium text-on-primary transition-shadow hover:shadow-card"
        >
          Contáctanos
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
