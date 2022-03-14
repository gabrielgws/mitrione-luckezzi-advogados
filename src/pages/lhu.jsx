import { AboutService } from "../components/AboutService";
import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { QuemSomos } from "../components/QuemSomos";
import { Questions } from "../components/Questions";
import Contato from "../components/Contato";
import { Footer } from "../components/Footer";
import { FooterTwo } from "../components/FooterTwo";
import { Gabrielgws } from "../components/Gabrielgws";
import WhatsAppButton from "../components/WhatsAppButton";

export default function lhu(){
  return(
    <>
      <Header />
      <Headline />
      <QuemSomos />
      <AboutService /> 
      <Questions />
      <Contato />
      <Footer />
      <FooterTwo />
      <Gabrielgws />
      <WhatsAppButton />
    </>
  )
}