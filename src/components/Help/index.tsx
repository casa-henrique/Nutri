import { PersonSimpleThrow } from "@phosphor-icons/react";
import { Card } from "./card";

export function Help() {
  const listCards = [
    {
      title: "Envelhecimento Saudável",
      icon: <PersonSimpleThrow size={32} />,
      desc: "O Envelhecimento Ativo é um processo contínuo, um investimento de vida que se estende por toda a vida. Quanto mais cedo se começa a otimizar as oportunidades de saúde, alimentando-se de forma saudável, maior a chance de desfrutar uma velhice com qualidade de vida.",
      image: "",
    },
    {
      title: "Envelhecimento Saudável",
      icon: <PersonSimpleThrow size={32} />,
      desc: "O Envelhecimento Ativo é um processo contínuo, um investimento de vida que se estende por toda a vida. Quanto mais cedo se começa a otimizar as oportunidades de saúde, alimentando-se de forma saudável, maior a chance de desfrutar uma velhice com qualidade de vida.",
      image: "",
    },
    {
      title: "Envelhecimento Saudável",
      icon: <PersonSimpleThrow size={32} />,
      desc: "O Envelhecimento Ativo é um processo contínuo, um investimento de vida que se estende por toda a vida. Quanto mais cedo se começa a otimizar as oportunidades de saúde, alimentando-se de forma saudável, maior a chance de desfrutar uma velhice com qualidade de vida.",
      image: "",
    },
    {
      title: "Envelhecimento Saudável",
      icon: <PersonSimpleThrow size={32} />,
      desc: "O Envelhecimento Ativo é um processo contínuo, um investimento de vida que se estende por toda a vida. Quanto mais cedo se começa a otimizar as oportunidades de saúde, alimentando-se de forma saudável, maior a chance de desfrutar uma velhice com qualidade de vida.",
      image: "",
    },
  ];

  return (
    <section className="flex flex-col gap-12 items-center py-16">
      <h2 className="text-3xl font-black font-Poppins text-bold">
        Quem Podemos Ajudar
      </h2>

      <div className="grid grid-cols-2 gap-14 px-16">
        {listCards.map((item, i) => {
          return (
            <Card
              title={item.title}
              icon={item.icon}
              desc={item.desc}
              image={item.image}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
}
