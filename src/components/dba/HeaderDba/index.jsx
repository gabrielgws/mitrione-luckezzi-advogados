import { Box, Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { FaWhatsapp } from "react-icons/fa";
import Form from "./Form";

export default function HeaderDba(){
  return (
    <Flex
      w='100%'
      h='100%'
      bgColor='blue.500'
      align='center'
      justify='center'
    >
      <Flex justify='center' maxWidth={1480} flexDirection='column'>
        <Box>
          <Flex boxSize={['8rem', '14rem']}>
            <Image src="/images/logo.webp" w={['118px', '192px']} h={['118px', '192px']} alt="Logo - Mitrione & Luckezzi - Advogados" />
          </Flex>
        </Box>
        <Flex 
          w='100%'
          align='center'
          justify='space-between'
          pb={[8, 8, 8, 8]}
          px={[4, 6, 6, 10]}
          maxWidth={1480}
          flexDirection={['column', 'column', 'row']}
        >

          <Box w={['100%','100%', '48%', '50%']} color='black'>
            <Heading as='h1' fontSize={['1rem', '1.6rem']} textTransform='uppercase'>Teve o seu veículo apreendido pelo Banco? Saiba agora como recuperar seu veículo.</Heading>
            <Heading as='h3' fontSize='1rem' mt={2}>(Veja seção de perguntas e respostas abaixo)</Heading>

            <Box mt={[4, 8]} fontSize='1rem' w='100%'>
              <Text>A ausência de pagamento do contrato de financiamento veicular pode gerar a busca e apreensão do seu veículo à pedido judicial da instituição financeira.
              </Text>

              <Text mt={2}>No entanto, esta situação somente pode permanecer se não houverem irregularidades no processo e/ou no contrato de financiamento.</Text>

              <Text mt={2}>Somos especialistas em casos de veículo apreendido com parcelas em atraso em ação de Busca e apreensão. </Text>

              <Text mt={2}>Atuamos em favor do consumidor com objetivo de auxiliar na liberação do veículo.

              </Text>
            </Box>

            <Flex align='center' justify={['center', 'center', 'start']}>
              <Button
                w={['100%','80%', '70%']}
                h={14}
                fontSize='1rem'
                as='a'
                href='https://api.whatsapp.com/send?phone=553194866990'
                leftIcon={<FaWhatsapp size='1.3rem'/>}
                borderRadius={20}
                colorScheme='whatsapp'
                variant='solid'
                mt={[4 , 8]}
                mb={[8 , 8]}
              >
                Fale conosco agora
              </Button>
            </Flex>
          </Box>

          <Flex
            w={['100%','80%', '50%', '40%']}
            align='center'
            justify='center'
            borderRadius={4}
            bg='gray.200'
            py={[8, 14]}
            flexDirection='column'
          >
            <Heading color='red.650' align='center' w='80%' mb={[4,8]} fontSize={['1rem', '1.3rem']} lineHeight={8}>Nós ligamos para você. Solicite agora o contato com um de nossos advogados</Heading>
            <Form />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}