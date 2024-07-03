import patyImage from "../../assets/images/patyImage.png";

export function Atendimento() {
  return (
    <div
      id="atedimento"
      className="atendimento flex w-full justify-center items-center"
    >
      <img src={patyImage} alt="Imagem Patricia Flores" />

      <div className="flex flex-col w-[30%] gap-4">
        <p className="font-Poppins text-sm">
          Olá! <br /> <br /> Vamos nos conhecer? <br /> <br /> Me chamo Patrícia
          Flores ou Nutri Paty Flores (como os pacientes gostam de me chamar).
          Sou Nutricionista há 15 anos, formada pela PUCRS, especialista em
          Terapia Nutricional Enteral e Parenteral, e Especialista em Nutrição
          Oncológica pela SBNO (Sociedade Brasileira de Nutrição Oncológica).{" "}
          <br /> <br /> Sou apaixonada pela vida e pelas oportunidades!
          Oportunidade de cuidar, orientar e apoiar as pessoas a atingirem suas
          metas e seus objetivos! <br /> <br /> Foi através do Aconselhamento
          Nutricional que descobri meu propósito de vida! <br /> <br /> Por
          isso, sigo me atualizando e aprimorando sempre meus conhecimentos para
          oferecer o MELHOR aos meus pacientes. <br /> <br /> Acredito que
          através do AMOR e da dedicação TUDO é POSSÍVEL! <br /> <br /> Seja bem
          vindo e conte comigo! <br /> <br /> Abraços da Nutri
        </p>
        <h2 className="font-bold text-3xl text-black font-Poppins">
          Patrícia Flores
        </h2>
        <a
          href="https://api.whatsapp.com/send?phone=5551992794724&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.%20"
          className="hover:bg-[#02AC30] bg-[#015D1A] text-white rounded-[57px] w-fit p-4 px-12 mt-8 font-Poppins"
        >
          Atendimento online
        </a>
      </div>
    </div>
  );
}
