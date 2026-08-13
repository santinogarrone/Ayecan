import Container from "./Container";
import terapia from "../assets/psicologia.png";
import adaptativa from "../assets/leer.png";
import social from "../assets/grupo.png";
import Card from "./Card";

const features = [
  {
    icon: <img src={terapia} alt="" className="h-6 w-6" />,
    title: "Terapia integrada",
    description:
      "Apoyo clínico integrado de manera fluida en el horario académico diario, lo que reduce la carga cognitiva..",
  },
  {
    icon: <img src={adaptativa} alt="" className="h-6 w-6" />,
    title: "Academia adaptativa",
    description:
      "Un plan de estudios que se adapta a las necesidades del estudiante, manteniendo el rigor sin una presión agobiante.",
  },
  {
    icon: <img src={social} alt="" className="h-6 w-6" />,
    title: "Enfoque comunitario",
    description:
      "Construyendo resiliencia social y inteligencia emocional a través de interacciones guiadas entre pares.",
  },
];

const SeccionMedia = () => {
  return (
    <section className="bg-surface-container-low py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-display text-primary mb-3">
            Un enfoque centrado en las personas
          </h2>
          <p className="text-on-surface-variant">
            Nuestra metodología integra prácticas terapéuticas basadas en
            evidencia con una academia de alta calidad, creando un entorno
            holístico para un crecimiento sostenible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SeccionMedia;
