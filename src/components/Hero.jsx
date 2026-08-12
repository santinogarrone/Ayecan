import React from "react";
import heroImage from "../assets/ayecan-hero1.jpg";

export default function Hero() {
  return (
    <>
      <section className="px-6 py-12 font-size: 40px">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* IZQUIERDA */}
          <div className="max-w-[550px]">
            <h1 className="font-jakarta text-5xl font-bold leading-tight text-primary">
              Cultivating Potential in a Calm Environment
            </h1>

            <p className="mt-5 max-w-[550px] text-lg leading-relaxed">
              Lumina Academy offers a specialized therapeutic educational
              program designed to support academic rigor while ensuring
              emotional safety.
            </p>

            <button className="mt-7 rounded-md bg-[#405a4b] px-7 py-3 text-white">
              Contáctanos ahora
            </button>
          </div>

          {/* DERECHA */}
          <div>
            <a href="#">
              <img
                src={heroImage}
                alt="Classroom"
                className="w-[550px] rounded-lg"
              />
            </a>
          </div>
        </div>
      </section>
      s
    </>
  );
}
