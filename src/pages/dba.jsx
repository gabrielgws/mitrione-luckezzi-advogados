import { AboutServiceDba } from "../components/dba/AboutServiceDba";
import { FooterTwoDba } from "../components/dba/FooterTwoDba";
import { FooterDba } from "../components/dba/FooterDba";
import HeaderDba from "../components/dba/HeaderDba";
import { QuemSomosDba } from "../components/dba/QuemSomosDba";
import { QuestionsDba } from "../components/dba/QuestionsDba";
import { Gabrielgws } from "../components/Gabrielgws";
import WhatsAppButtonDba from "../components/dba/WhatsAppButtonDba";
import ContatoDba from "../components/dba/ContatoDba";
import { OtherServicesDba } from "../components/dba/OtherServicesDba";

export default function dba(){
  return (
    <>
      <HeaderDba />
      <QuemSomosDba />
      <QuestionsDba />
      <OtherServicesDba />
      <AboutServiceDba />
      <ContatoDba />
      <FooterDba />
      <FooterTwoDba />
      <Gabrielgws />
      <WhatsAppButtonDba />
    </>
  )
}