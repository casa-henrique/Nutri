import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  desc: string;
  image: string;
}

export function Card({ title, icon, desc, image }: CardProps) {
  return (
    <div className="flex items-center justify-around rounded-3xl shadow-[0px_0px_14px_5px_#00000066] h-auto overflow-hidden p-4 py-8">
      <img src={image} alt="" className="h-32 w-32 rounded-full" />

      <div className="flex flex-col gap-4 w-[70%]">
        <div className="flex gap-3">
          <h3 className="text-black border-b border-green-800 text-lg">
            {title}
          </h3>
          {icon}
        </div>

        <p className="text-sm">{desc}</p>

        <button className="rounded-full bg-green-800 hover:bg-green-900 w-fit text-white text-sm p-2 px-4">
          Solicite um atendimento
        </button>
      </div>
    </div>
  );
}
