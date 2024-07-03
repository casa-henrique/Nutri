import { Atendimento } from "./components/Atendimento";
import { Cookies } from "./components/Cookies";
import { Feedback } from "./components/Feedback";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
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
      <Atendimento />
      <Feedback />
      <Form />

      <Footer />
      <WhatsAppButton />
      {toggle && <Cookies />}
    </div>
  );
}

export default App;
