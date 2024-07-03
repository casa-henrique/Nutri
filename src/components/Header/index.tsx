import LogoPatyFlores from "../../assets/images/logo.svg";
import LogoEspecialista from "../../assets/images/logoEspecialista.svg";

export function Header() {
  return (
    <header className="flex w-full gap-3 py-2 justify-around items-center">
      <div className="flex gap-2 items-center">
        <img
          src={LogoPatyFlores}
          alt="Logo Nutri Patricia flores"
          className="h-24 w-auto"
        />
        <img
          src={LogoEspecialista}
          alt="Logo sociedade brasileira de nutrição oncológica"
          className="h-12 w-auto"
        />
      </div>

      <div className="flex items-center gap-6 font-Poppins">
        <a href="#inicio">Inicio</a>
        <a href="#atendimento">Atendimento</a>
        <a
          href="https://api.whatsapp.com/send?phone=5551992794724&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.%20"
          className="rounded-full bg-green-800 hover:bg-green-900 text-white p-2 px-8"
        >
          Agende sua consulta
        </a>
      </div>
    </header>
  );
}
