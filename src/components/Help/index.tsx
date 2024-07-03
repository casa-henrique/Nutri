import { Card } from "./card";

import envelhecimentoImage from "../../assets/images/help/evelhecimentoImage.png";
import envelhecimentoIcon from "../../assets/images/help/envelhecimentoIcon.svg";
import acompanhamentoImage from "../../assets/images/help/acompanhamentoImage.png";
import acompanhamentoIcon from "../../assets/images/help/acompanhamentoIcon.svg";
import cancerImage from "../../assets/images/help/cancerImage.png";
import cancerIcon from "../../assets/images/help/cancerIcon.svg";
import idososImage from "../../assets/images/help/idososImage.png";
import idososIcon from "../../assets/images/help/idososIcon.svg";
import altaImage from "../../assets/images/help/altaImage.png";
import altaIcon from "../../assets/images/help/altaIcon.svg";
import proprietarioImage from "../../assets/images/help/proprietarioImage.png";
import proprietarioIcon from "../../assets/images/help/proprietarioIcon.svg";

export function Help() {
  const listCards = [
    {
      title: "Envelhecimento Saudável",
      icon: <img src={envelhecimentoIcon} className="size-12" />,
      desc: "O Envelhecimento Ativo é um processo contínuo, um investimento de vida que se estende por toda a vida. Quanto mais cedo se começa a otimizar as oportunidades de saúde, alimentando-se de forma saudável, maior a chance de desfrutar uma velhice com qualidade de vida.",
      image: envelhecimentoImage,
    },
    {
      title: "Acompanhamento Nutricional",
      icon: <img src={acompanhamentoIcon} className="size-12" />,
      desc: "O acompanhamento nutricional inicia já na primeira consulta até o momento da alta, momento no qual o paciente atingiu seus objetivos e consegue seguir sem o apoio profissional.",
      image: acompanhamentoImage,
    },
    {
      title: "Câncer",
      icon: <img src={cancerIcon} className="size-12" />,
      desc: "A terapia nutricional para o paciente oncológico em tratamento de quimioterapia e radioterapia é de extrema importância para evitar os efeitos deletérios ao estado nutricional que esses tratamentos podem ocasionar. A intervenção nutricional adequada está associada a maior taxa de sobrevida e melhora do estado nutricional, da ingestão alimentar, da capacidade funcional e da qualidade de vida. Esses pacientes adaptam-se melhor aos programas de reabilitação, além de apresentarem menor taxa de reinternação.",
      image: cancerImage,
    },
    {
      title: "Cuidado para Idosos",
      icon: <img src={idososIcon} className="size-12" />,
      desc: "Entre as mudanças ocorridas no processo do envelhecimento, alguns idosos têm dificuldade de se alimentar adequadamente ou manifestam alguma condição clínica que exige uma atenção como demências, disfagia e sarcopenia. Nestes casos é necessário um acompanhamento nutricional individualizado, realizado por um profissional que conheça todas essas mudanças e contribua na nutrição no idoso.",
      image: idososImage,
    },
    {
      title: "Alta Hospitalar (Via alternativa de alimentação (sonda)",
      icon: <img src={altaIcon} className="size-12" />,
      desc: "Os pacientes hospitalizados são frequentemente despreparados para o autocuidado após a alta hospitalar, ocasionando, muitas vezes, a readmissão hospitalar não planejada e atraso na reabilitação nutricional. A terapia nutricional domiciliar reduz complicações clínicas e nutricionais, bem como diminui as chances de reinternações precoces. Além disso, permite maior interação da família com os cuidados do paciente, proporcionando melhor qualidade de vida e humanização.",
      image: altaImage,
    },
    {
      title: "Perioperatório",
      icon: <img src={proprietarioIcon} className="size-12" />,
      desc: "O cuidado nutricional com o paciente cirúrgico inicia-se na triagem avaliação nutricional, sendo esta recomendada que seja realizada de maneira precoce e rotineiramente utilizando ferramentas de triagem e de avaliação nutricional. Com o resultado da avaliação nutricional é recomendado uma intervenção nutricional para preparar o paciente imunológico e metabolicamente para a cirurgia, contribuindo na sua recuperação e cicatrização.",
      image: proprietarioImage,
    },
  ];

  return (
    <section className="flex flex-col gap-12 items-center py-16">
      <h2 className="text-3xl font-black font-Poppins text-bold">
        Quem Podemos Ajudar
      </h2>

      <div className="grid grid-cols-2 gap-14 px-16 w-[80%]">
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
