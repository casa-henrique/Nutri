import { Cookies } from "./components/Cookies";
import { Footer } from "./components/Footer";
import { FormasAtendimento } from "./components/FormasAtendimento";
import { Header } from "./components/Header";
import { Help } from "./components/Help";
import { Hero } from "./components/Hero";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { useToggleCookie } from "./hooks/toggleCookie";

function App() {
  const { toggle } = useToggleCookie();

  return (
    <div className="w-full h-screen relative overflow-scroll overflow-x-hidden">
      <Header />

      <Hero />
      <Help />
      <FormasAtendimento />
      <Footer />

      <WhatsAppButton />
      {toggle && <Cookies />}
    </div>
  );
}

export default App;
