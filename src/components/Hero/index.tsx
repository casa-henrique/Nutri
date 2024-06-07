export function Hero() {
  return (
    <section className="flex w-full h-[85vh] relative rounded-[0px_0px_0px_50px] overflow-hidden">
      <img src="" alt="" className="w-full z-10 h-full abolute top-0 left-0" />

      <div className="flex flex-col gap-3 absolute z-20 right-16 top-1/2 -translate-y-1/2 w-[35%]">
        <h1 className="text-5xl text-black font-bold font-Poppins">
          REABILITAÇÃO NUTRICIONAL
        </h1>
        <p className="font-Poppins">
          Te ajudo a manter ou recuperar seu estado nutricional através de uma
          alimentação especializada.
        </p>

        <ul className="font-Poppins list-disc ml-5">
          <li>Alta Hospitalar</li>
          <li>Pessoa Idosa</li>
          <li>Câncer</li>
          <li>Perioperatório</li>
        </ul>

        <button className="px-6 p-3 mt-4 w-fit rounded-full bg-green-800 hover:bg-green-950 text-white">
          Solicite um atendimento
        </button>
      </div>
    </section>
  );
}
