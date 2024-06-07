export function Header() {
  return (
    <header className="flex w-full gap-3 py-6 justify-around items-center">
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <div className="flex items-center gap-6">
        <a href="#inicio">Inicio</a>
        <a href="#atendimento">Atendimento</a>
        <a
          href="#agendamento"
          className="rounded-full bg-green-800 hover:bg-green-900 text-white p-2 px-4"
        >
          Agende sua consulta
        </a>
      </div>
    </header>
  );
}
