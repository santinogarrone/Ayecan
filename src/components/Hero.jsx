import Container from "./Container";
import Card from "./Card";
import ayecanimg from "../assets/ayecan-hero1.jpg";

export default function Hero() {
  return (
    <section className="py-16">
      <Container className="flex items-stretch justify-between gap-24">
        <div className="flex max-w-[650px] flex-col justify-between text-xl">
          <div>
            <h1 className="font-jakarta text-6xl font-bold  tracking-tight text-primary">
              Cultivar el potencial en un entorno tranquilo
            </h1>

            <p className="mt-6 max-w-[620px] text-lg leading-8 text-text-black">
              Ayecan ofrece un programa educativo terapéutico especializado,
              diseñado para fomentar el rigor académico y, al mismo tiempo,
              garantizar la seguridad emocional.
            </p>
          </div>

          <button className="mt-10 w-fit rounded-md bg-primary px-10 py-5 text-white btn-primary">
            Contáctanos ahora
          </button>
        </div>

        <div className="flex flex-1 justify-end">
          <img
            src={ayecanimg}
            alt="Classroom"
            className="w-[500px] rounded-lg object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
