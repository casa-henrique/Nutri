import { Card } from "./Card";

export function FormasAtendimento() {
  const listFormats = [
    {
      title: "Atendimento Presencial",
      desc: "Atendo no Reabilite Up, um centro especializado de Reabilitação Cardiovascular, Pulmonar, Oncológica e Saúde do Idoso. Criei um espaço aconchegante e acolhedor pronto para recebê-lo com toda a segurança (estacionamento no local), acessibilidade (prédio com elevador) e disponibilidade (portaria 24h).",
      img: "",
    },
    {
      title: "Atendimento Domiciliar",
      desc: "Atendimento domiciliar aos pacientes acamados e sem condições de se deslocar e também a todos que preferem uma consulta na comodidade da sua casa.",
      img: "",
    },
    {
      title: "Atendimento On-line",
      desc: "O atendimento on-line segue o mesmo padrão do atendimento presencial, com toda a segurança, conforto, otimizando o seu tempo e evitando deslocamentos.",
      img: "",
    },
  ];

  return (
    <section className="flex w-full flex-col gap-12 items-center py-16">
      <h2 className="text-3xl font-black font-Poppins text-bold">
        Formas de Atendimento
      </h2>

      <div className="flex justify-around w-full mt-8">
        {listFormats.map((item, i) => {
          return (
            <Card img={item.img} title={item.title} desc={item.desc} key={i} />
          );
        })}
      </div>
    </section>
  );
}
