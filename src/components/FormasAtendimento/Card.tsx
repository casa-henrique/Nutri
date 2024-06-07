interface CardProps {
  img: string;
  title: string;
  desc: string;
}
export function Card({ img, title, desc }: CardProps) {
  return (
    <div className="flex flex-col items-center relative gap-8 bg-green-600 hover:bg-green-800 rounded-2xl p-4 w-[30%]">
      <img
        src={img}
        alt=""
        className="w-24 h-24 absolute top-0 -translate-y-1/2 rounded-full"
      />

      <h3 className="text-white font-Poppins text-lg border-b-2 mt-12 border-white">
        {title}
      </h3>
      <p className="mt-3 text-center text-white font-Poppins text-sm">{desc}</p>

      <button className="rounded-full bg-white text-green-700 hover:bg-gray-300 p-2 px-4 w-fit">
        Solicite um atendimento
      </button>
    </div>
  );
}
