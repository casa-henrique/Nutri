import { Card } from "./Card";

import camilaImage from "../../assets/images/feedback/camilaImage.png";
import AnaLauraImage from "../../assets/images/feedback/AnaLauraImage.png";
import bettineImage from "../../assets/images/feedback/bettineImage.png";
import rafaelImage from "../../assets/images/feedback/rafaelImage.png";
import starImage from "../../assets/images/feedback/stars.svg";
import logoWhite from "../../assets/images/logoWhite.svg";

export function Feedback() {
  const listFeedbacks = [
    {
      perfilImg: camilaImage,
      name: "Camila Severo",
      description:
        "Já venho sendo acompanhada pela Nutri Paty desde o ano passado, sempre muito simpática, receptiva e empática com as minhas questões. Tinha muita dificuldade em incluir verduras e frutas no meu cardápio, mas ela ajustou tão bem minhas refeições que quando vi já estava com frutas e verduras na minha alimentação e nem percebi. Com certeza minha nutri pra vida... Assino e recomendo!",
    },
    {
      perfilImg: rafaelImage,
      name: "Rafael Goldani",
      description:
        "Dra Patrícia é sensacional! Personalizou a minha dieta e emagreci comendo bem! Graças as receitas e as dicas dela, a mudança alimentar aconteceu sem estresse e vou mantê-las para sempre! Além do Fisico, a melhora de performance mental foi evidente!",
    },
    {
      perfilImg: AnaLauraImage,
      name: "Ana Laura Giovanella Xavier",
      description:
        "Excelente profissional e ser humano muito lindo! Muito dedicada e preocupada com o paciente. Entende, respeita e adequa a alimentação à realidade do paciente, considerando a rotina e o orçamento. Sempre esclarece as dúvidas, traz informações científicas e coerentes! Cuida do paciente com carinho, atenção, respeito e empatia!Super recomendo essa profissional, me ajudou muito, tenho uma qualidade de vida muito melhor hoje, sou muito grata!!!",
    },
    {
      perfilImg: bettineImage,
      name: "Bettine Christini",
      description:
        "A Pati é maravilhosa! Estou encantada com os atendimentos e com os ótimos resultados que estamos conquistando juntas. Entende direitinho as minhas limitações e faz com que as coisas fluam de uma maneira fácil. Estou encantada! É a melhor nutri do Brasil hehehehe",
    },
  ];

  return (
    <section className="flex flex-col gap-12 bg-[#3A7B2D] py-16 items-center">
      <h2 className="text-white text-2xl font-Poppins font-bold">
        Opiniões dos Pacientes
      </h2>

      <div className="flex gap-8 w-[70%]">
        {listFeedbacks.map((item, i) => {
          return (
            <Card
              desc={item.description}
              perfilImg={item.perfilImg}
              name={item.name}
              key={i}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 w-full">
        <img src={logoWhite} alt="" className="w-auto h-20" />

        <div>
          <p className="text-white font-bold font-Poppins text-sm">
            Nutricionista Patrícia Flores
          </p>
          <img src={starImage} alt="" className="w-auto h-4" />
          <p className="text-white font-bold font-Poppins text-sm">
            25 Google avaliações
          </p>
        </div>

        <a
          href=""
          className="px-8 p-3 h-fit rounded-[33px] text-[rgb(45,56,35)] bg-[rgb(166,200,78)]"
        >
          Deixe sua avaliação
        </a>
      </div>
    </section>
  );
}
