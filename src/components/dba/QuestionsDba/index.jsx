import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';

export function QuestionsDba() {

  return (
    <Flex w='100%' align='center' justify='center' bg='gay.50' color='black' id='section1'>
      <Flex
        w='100%'
        align='center'
        justify='center'
        flexDirection='column'
        pt={['8', 24]}
        pb={['8', 24]}
        px={2}
        maxWidth={1480}
      >
        <Text
          fontSize='1.5rem'
          fontWeight='bold'
          marginBottom='2rem'
        >Perguntas frequentes</Text>

        <Flex
          bg='gray.50'
          border='0'
          w='100%'
        >
        <Accordion allowToggle w='100%'>
          {/* Incio da question */}
          <AccordionItem
            border={0}
            w='100%'
          >
            <h2>
              <AccordionButton borderBottom='1px solid black' _focus={'outline'}>
                <AccordionIcon/>
                <Flex>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']} textTransform='uppercase'>A busca e apreensão é legal?
                  </Heading>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            O procedimento sim. Ou seja, o Banco pode requerer a medida. Mas precisa cumprir requisitos legais para que ele seja válido.
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          {/* Incio da question */}
          <AccordionItem
            border={0}
            w='100%'
            mt={2}
          >
            <h2>
              <AccordionButton borderBottom='1px solid black' _focus={'outline'}>
                <AccordionIcon />
                <Flex>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']} textTransform='uppercase'>Quanto tempo até o banco leiloar (ou vender diretamente) o veículo?</Heading>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            Após 5 dias após a apreensão, se não houver a interposição de defesa, a propriedade resolúvel do bem, assim como a posse, passam a ser do Banco, momento em que ele poderá vender o bem diretamente (para quem quiser) ou leiloá-lo.  
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          {/* Incio da question */}
          <AccordionItem
            border={0}
            w='100%'
            mt={2}
          >
            <h2>
              <AccordionButton borderBottom='1px solid black' _focus={'outline'}>
                <AccordionIcon />
                <Flex>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']} textTransform='uppercase'>Meu nome vai continuar no SPC?
                  </Heading>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            Sim, até a quitação plena do contrato.
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          {/* Incio da question */}
          <AccordionItem
            border={0}
            w='100%'
            mt={2}
          >
            <h2>
              <AccordionButton borderBottom='1px solid black' _focus={'outline'}>
                <AccordionIcon />
                <Flex>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']} textTransform='uppercase'>
                  Posso ser cobrado de mais alguma coisa pelo banco?
                  </Heading>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            Sim, se o valor obtido pela venda do carro não for capaz de quitar o saldo devedor do contrato, o banco continuará sendo seu credor e poderá converter a ação de busca e apreensão em execução para atingir outros bens seus. Assim você perderá o carro, todo o valor que já pagou por ele (incluindo a entrada) e poderá continuar devendo ao banco com o seu nome no SPC até a plena quitação.
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          {/* Incio da question */}
          <AccordionItem
            border={0}
            w='100%'
            mt={2}
          >
            <h2>
              <AccordionButton borderBottom='1px solid black' _focus={'outline'}>
                <AccordionIcon />
                <Flex>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']} textTransform='uppercase'>
                  Posso fazer algo para recuperar o veículo?
                  </Heading>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
              Sim! Essa é a boa notícia! Pode e deve RECORRER. O seu prazo JÁ ESTÁ CORRENDO, e há grandes chances de recuperá-lo.
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          <Flex
            mt='2rem'
            p={5}
            bg='red.650'
            color='gray.50'
            shadow='md'
            borderRadius={4}
            borderWidth='1px'
          >
            <Heading fontSize={['1rem', '1rem', '1rem',  '1.1rem']} lineHeight='2rem' hover={{color: 'blue'}}>
              Se você foi vítima de um caso de busca e apreensão recentemente,
              CLICA AGORA no botão do WhatsApp aqui do lado<br/>
              e peça atendimento preferencial no nosso plantão que iremos te passar todas as informações necessárias para recuperar prontamente o seu veículo.
            </Heading>
          </Flex>
        </Accordion>
        </Flex>
      </Flex>
    </Flex>
  )
}