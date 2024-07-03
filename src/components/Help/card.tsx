import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  desc: string;
  image: string;
}

export function Card({ title, icon, desc, image }: CardProps) {
  return (
    <div className="flex items-center justify-around gap-8 rounded-3xl shadow-[0px_0px_14px_5px_#00000066] h-auto overflow-hidden p-4 py-8">
      <img src={image} alt="" className="size-44 rounded-full" />

      <div className="flex flex-col gap-4 w-[70%]">
        <div className="flex gap-3 items-center">
          <h3 className="text-black border-b font-Poppins border-green-800 text-lg h-fit font-bold">
            {title}
          </h3>
          {icon}
        </div>

        <p className="text-sm text-[#91999d] font-Poppins">{desc}</p>

        <a
          href="https://api.whatsapp.com/send?phone=5551992794724&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.%20"
          target="_blank"
          className="rounded-full font-Poppins bg-green-800 hover:bg-green-900 w-fit text-white text-sm p-2 px-8"
        >
          Solicite um atendimento
        </a>
      </div>
    </div>
  );
}
