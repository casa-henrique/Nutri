export function Footer() {
  return (
    <footer className="flex flex-col bg-black w-full">
      <div className="flex flex-col items-center justify-center gap-8 w-full py-12 bg-white">
        <h2 className="text-3xl font-black font-Poppins text-bold">
          Parceiros
        </h2>

        <img src="" alt="" />

        <button className="px-6 p-3 mt-4 w-fit rounded-full bg-green-800 hover:bg-green-950 text-white">
          Solicite um atendimento
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <p className="text-sm border-b border-white text-white py-3">
          Dra. Patricia Flores - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
