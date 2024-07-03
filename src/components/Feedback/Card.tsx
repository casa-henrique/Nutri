import googleLogo from "../../assets/images/feedback/googleLogo.svg";
import starImage from "../../assets/images/feedback/stars.svg";

interface CardProps {
  perfilImg: string;
  name: string;
  desc: string;
}

export function Card({ desc, name, perfilImg }: CardProps) {
  return (
    <div className="flex relative flex-col gap-8 p-6 border-2 border-[rgb(224,224,224)] bg-white w-1/4 rounded-[11px]">
      <div className="flex gap-4 h-[3rem]">
        <img src={perfilImg} alt="" className="size-11" />

        <div className="flex flex-col">
          <p className="font-Poppins text-black font-bold w-[80%]">{name}</p>

          <div className="flex items-center gap-2">
            <img src={starImage} alt="" className="h-4 w-auto" />
            <p className="text-sm font-Poppins text-[rgb(115,123,127)]">
              11 meses atrás
            </p>
          </div>
        </div>

        <img
          src={googleLogo}
          alt=""
          className="absolute top-4 right-6 size-12"
        />
      </div>

      <p className="font-Poppins text-sm">{desc}</p>
    </div>
  );
}
