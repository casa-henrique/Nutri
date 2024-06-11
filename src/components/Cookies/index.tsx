import { useToggleCookie } from "../../hooks/toggleCookie";

export function Cookies() {
  const { setToogle } = useToggleCookie();

  return (
    <div className="fixed flex items-center bottom-0 z-30 w-full bg-white border-t border-gray-300 h-[10vh] shadow-[rgba(0,0,15,0.5)_10px_5px_14px_0px]">
      <button
        onClick={() => setToogle(false)}
        className="px-4 py-1 bg-green-800 hover:bg-green-950 text-white rounded-md"
      >
        fechar
      </button>
    </div>
  );
}
