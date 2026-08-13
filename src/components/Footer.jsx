import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-surface-container">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-6 py-12 md:grid-cols-3">
        {/* Marca */}
        <div>
          <h2 className="mb-3 text-xl font-display text-primary">Ayecan</h2>

          <p className=" text-sm leading-6 text-text-black">
            Centro educativo terapéutico dedicado al acompañamiento integral y
            al desarrollo de cada persona.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Ayecan. Todos los derechos reservados.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <ul className="space-y-3 text-sm text-text-black">
            <li>
              <a href="mailto:contacto@ayecan.com" className="">
                contacto@ayecan.com
              </a>
            </li>

            <li>
              <a className="">3364397244 / 3364027790</a>
            </li>

            <li>Libertad 1245 - Villa Constitución, Santa Fe</li>
          </ul>
        </div>

        {/* Redes / Información */}
        <div>
          <ul className="space-y-3 text-sm text-text-black">
            <li>
              <a
                href="https://www.instagram.com/ayecan.vc/"
                className="flex items-center gap-2 transition hover:text-primary"
              >
                <img src={instagram} alt="Instagram" className="h-5 w-5" />
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/ayecan.cet.1?locale=es_LA"
                className="flex items-center gap-2 transition hover:text-primary"
              >
                <img src={facebook} alt="Facebook" className="h-5 w-5" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
