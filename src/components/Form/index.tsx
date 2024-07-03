import { useState } from "react";
import formImage from "../../assets/images/formBackground.png";

export function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const postData = (event: any) => {
    event.preventDefault();
    console.log("passsou");

    const sendData = {
      nome: name,
      email: mail,
      telefone: phone,
    };
  };

  return (
    <section className="relative flex h-fit items-center justify-center py-16">
      <div className="flex items-center h-full z-30 justify-center gap-10 w-[60%] ">
        <div className="flex flex-col gap-10 w-2/3">
          <h2 className="text-white font-Poppins text-4xl leading-relaxed">
            Agende uma Consulta para Reabilitação Alimentar
          </h2>
          <a
            className="bg-white px-10 p-3 w-fit rounded-[57px]"
            href="https://api.whatsapp.com/send?phone=5551992794724&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.%20"
          >
            Agende sua consulta
          </a>
        </div>

        <div className="w-2 h-[23rem] bg-white" />

        <form onSubmit={postData} className="flex flex-col gap-8">
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="*Nome"
            className="w-full h-11 px-3 placeholder:text-[rgb(179,179,179)] text-[rgb(179,179,179)] font-Poppins border border-[rgb(163,186,198)] rounded-sm"
          />
          <input
            type="text"
            value={mail}
            onChange={(event) => setMail(event.target.value)}
            required
            placeholder="*E-mail"
            className="w-full h-11 px-3 placeholder:text-[rgb(179,179,179)] text-[rgb(179,179,179)] font-Poppins border border-[rgb(163,186,198)] rounded-sm"
          />
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            placeholder="*Telefone"
            className="w-full h-11 px-3 placeholder:text-[rgb(179,179,179)] text-[rgb(179,179,179)] font-Poppins border border-[rgb(163,186,198)] rounded-sm"
          />

          <label className="flex items-start gap-4 cursor-pointer">
            <input type="checkbox" className="size-5" />
            <p className="font-Poppins text-[rgb(179,179,179)]">
              Concordo em fornecer meus dados para receber conteúdos e
              <br /> ofertas por e-mail ou outros meios.
            </p>
          </label>

          <button className="bg-white py-3 rounded-sm">
            Enviar agora mesmo
          </button>
        </form>
      </div>

      <div className="absolute top-0 left-0 h-full w-full z-20">
        <img src={formImage} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
