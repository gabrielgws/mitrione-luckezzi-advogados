import { Header } from "../components/Header";
import HomePage from "../components/HomePage";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home(){
  return(
    <>
      <Header 
        position='fixed'
        zIndex='999'
      />
      <HomePage />
      <WhatsAppButton />
    </>
  )
}