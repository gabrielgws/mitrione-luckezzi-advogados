import FloatingWhatsApp from "react-floating-whatsapp";
import "react-floating-whatsapp/dist/index";

export default function WhatsAppButtonVab() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+5531994866990"
        height={400}
        avatar='/images/logo-funcoBranco.webp'
        accountName="Mitrione & Luckezzi" statusMessage="Advogados"
        chatMessage="Olá, agradecemos seu contato. Quais suas dúvidas sobre o seu veículo apreendido pelo Banco?"
        allowClickAway={true}
        allowEsc={true}
        placeholder="Mensagem"
      />
    </>
  );
}