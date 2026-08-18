import Container from "./Container";
import ayecanimg from "../assets/ayecan-hero1.jpg";

export default function Hero() {
  return (
    <section className="py-10 md:py-16">
      <Container className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
        <div className="flex w-full max-w-[650px] flex-col">
          <div>
            <h1 className="font-jakarta text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Cultivar el potencial en un entorno tranquilo
            </h1>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-text-black sm:text-lg sm:leading-8">
              Ayecan ofrece un programa educativo terapéutico especializado,
              diseñado para fomentar el rigor académico y, al mismo tiempo,
              garantizar la seguridad emocional.
            </p>
          </div>

          <button className="mt-8 w-fit rounded-md bg-primary px-7 py-4 text-white btn-primary sm:px-10 sm:py-5">
            Contáctanos ahora
          </button>
        </div>

        <div className="w-full md:flex-1 md:justify-end">
          <img
            src={ayecanimg}
            alt="Classroom"
            className="h-auto w-full rounded-lg object-cover md:ml-auto md:max-w-[500px]"
          />
        </div>
      </Container>
    </section>
  );
}
