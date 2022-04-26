import { AboutService } from "../components/lhu/AboutService";
import { Header } from "../components/Header";
import { Headline } from "../components/lhu/Headline";
import { QuemSomos } from "../components/lhu/QuemSomos";
import { Questions } from "../components/lhu/Questions";
import Contato from "../components/lhu/Contato";
import { Footer } from "../components/lhu/Footer";
import { FooterTwo } from "../components/lhu/FooterTwo";
import { Gabrielgws } from "../components/Gabrielgws";
import WhatsAppButton from "../components/lhu/WhatsAppButton";

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