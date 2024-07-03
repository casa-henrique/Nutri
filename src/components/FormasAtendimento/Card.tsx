interface CardProps {
  img: string;
  title: string;
  desc: string;
}
export function Card({ img, title, desc }: CardProps) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5551992794724&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.%20"
      target="_blank"
      className="flex flex-col items-center relative justify-between gap-8 bg-[#02AC30] hover:bg-[#015D1A] rounded-2xl p-4 w-[30%]"
    >
      <img
        src={img}
        alt=""
        className="size-34 absolute top-0 -translate-y-1/2 rounded-full"
      />

      <h3 className="text-white font-Poppins text-lg border-b-2 mt-20 border-white">
        {title}
      </h3>
      <p className="mt-3 text-center text-white font-Poppins text-sm">{desc}</p>

      <button className="rounded-full font-Poppins bg-white text-[#015D1A] hover:bg-gray-300 p-2 px-8 w-fit">
        Solicite um atendimento
      </button>
    </a>
  );
}
