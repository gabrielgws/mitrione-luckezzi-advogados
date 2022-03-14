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

export function Questions() {

  return (
    <Flex w='100%' align='center' justify='center' bg='red.650' color='gray.50' id='section1'>
      <Flex
        w='100%'
        align='center'
        justify='center'
        flexDirection='column'
        p={['8', 24]}
        maxWidth={1480}
      >
        <Text
          fontSize='1.5rem'
          fontWeight='bold'
          marginBottom='2rem'
        >Perguntas frequentes</Text>

        <Flex
          align='center'
          justify='center'
          w='100%'
        >
        <Accordion allowToggle w='100%' align='center'>
          {/* Incio da question */}
          <AccordionItem
            display='flex'
            flexDirection='column'
            align='center'
            justify='center'
            bg='gray.50'
            color='red.650'
            borderRadius='5px'
            w='100%'
          >
            <h2>
              <AccordionButton  align='center' justify='center' flexDirection='column'>
                <Box>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>Alguém próximo está em estado crítico de saúde e precisa de leito hospitalar na rede pública, mas não tem disponível, o que fazer?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            Solicitar ao Estado para disponibilização de leito com urgência na Rede Privada, com custeio através de verba pública. 
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          {/* Incio da question */}
          <AccordionItem
            display='flex'
            flexDirection='column'
            align='center'
            justify='center'
            bg='gray.50'
            color='red.650'
            mt='1rem'
            borderRadius='5px'
            w='100%'
          >
            <h2>
              <AccordionButton  align='center' justify='center' flexDirection='column'>
                <Box>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>O estado tem o dever de disponibilizar leito hospitalar em caso de necessidade do paciente?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            Sim, é dever do Estado providenciar leito na Rede Pública de Saúde, ou, na falta deste, custear o tratamento na Rede Privada.  
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          {/* Incio da question */}
          <AccordionItem
            display='flex'
            flexDirection='column'
            align='center'
            justify='center'
            bg='gray.50'
            color='red.650'
            mt='1rem'
            borderRadius='5px'
            w='100%'
          >
            <h2>
              <AccordionButton  align='center' justify='center' flexDirection='column'>
                <Box>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>Como proceder no caso de não haver leitos disponíveis?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            Procure um Advogado Especialista neste serviço para lhe auxiliar em requerimento judicial urgente de leito. 
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          {/* Incio da question */}
          <AccordionItem
            display='flex'
            flexDirection='column'
            align='center'
            justify='center'
            bg='gray.50'
            color='red.650'
            mt='1rem'
            borderRadius='5px'
            w='100%'
          >
            <h2>
              <AccordionButton  align='center' justify='center' flexDirection='column'>
                <Box>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>Em quanto tempo é possível obter na justiça a disponibilização de leito?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            Considerando que trata-se de DIREITO À VIDA, a decisão judicial normalmente ocorre em algumas horas após o protocolo do requerimento.
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          {/* Incio da question */}
          <AccordionItem
            display='flex'
            flexDirection='column'
            align='center'
            justify='center'
            bg='gray.50'
            color='red.650'
            mt='1rem'
            borderRadius='5px'
            w='100%'
          >
            <h2>
              <AccordionButton  align='center' justify='center' flexDirection='column'>
                <Box>
                  <Heading as='h2' p={2} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>Como fazer a requisição judicial?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={['1rem', '1rem', '1rem',  '1.1rem']}>
            Você deve enviar para o Advogado os documentos que comprovam a situação de urgência e a indisponibilidade de leito na Rede Pública para a análise. Com isso em mãos ele poderá lhe auxiliar neste processo.
            </AccordionPanel>
          </AccordionItem>
          {/* Fim da question */}

          <Box
            mt='1rem'
            p={5}
            bg='gray.50'
            color='red.650'
            shadow='md'
            borderRadius={4}
            borderWidth='1px'
            _hover={{ bg: 'gray.200' }}
          >
            <Heading fontSize={['1rem', '1rem', '1rem',  '1.1rem']} lineHeight='2rem'>Se este é o seu caso, CLIQUE AGORA NO BOTÃO VERDE DO WHATSAPP AQUI DO LADO e peça preferência no nosso plantão de atendimento, que poderemos te ajudar a resolver essa situação.
            </Heading>
          </Box>
        </Accordion>
        </Flex>
      </Flex>
    </Flex>
  )
}