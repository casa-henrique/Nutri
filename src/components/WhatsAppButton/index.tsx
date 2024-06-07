import { WhatsappLogo } from "@phosphor-icons/react";

export function WhatsAppButton() {
  return (
    <>
      <a
        href=""
        className="fixed bottom-16 right-6 z-50 bg-[rgba(0,200,0,1)] hover:bg-[#2a7a48] rounded-full p-3"
      >
        <WhatsappLogo size={30} className="text-gray-100" />
      </a>
      <a
        href=""
        className="fixed bottom-16 right-6 z-40 bg-[rgba(0,200,0,1)] rounded-full p-3 animate-ping"
      >
        <WhatsappLogo size={30} className="text-gray-100" />
      </a>
    </>
  );
}
