import FloatingWhatsApp from "react-floating-whatsapp";
import "react-floating-whatsapp/dist/index";

export default function WhatsAppButton() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+5531994866990"
        height={400}
        avatar='/images/logo-funcoBranco.webp'
        accountName="Mitrione & Luckezzi" statusMessage="Advogados"
        chatMessage="Olá, agradecemos seu contato. Quais suas dúvidas?"
        allowClickAway={true}
        allowEsc={true}
        placeholder="Mensagem"
      />
    </>
  );
}