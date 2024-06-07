import { Cookies } from "./components/Cookies";
import { FormasAtendimento } from "./components/FormasAtendimento";
import { Header } from "./components/Header";
import { Help } from "./components/Help";
import { Hero } from "./components/Hero";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <div className="w-full h-screen relative overflow-scroll">
      <Header />

      <Hero />
      <Help />
      <FormasAtendimento />

      <WhatsAppButton />
      <Cookies />
    </div>
  );
}

export default App;
