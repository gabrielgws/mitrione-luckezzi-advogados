import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export function QuemSomos(){
  return(
    <Flex w='100%' align='center' justify='center' bg='red.650' color='gray.50'>
      <Flex
        w='100%'
        align='center'
        justify='space-between'
        pt={[8, 8, 16, 24]}
        pb={[8, 8, 16, 24]}
        px={[4, 6, 6, 10]}
        maxWidth={1480}
        flexDirection={['column', 'column', 'row']}
      >
        <Flex align='center' justify='center' w={['80%', '80%', '50%', '50%']}>
          <Flex align='center' justify='center'>
            <Image src='/images/logoBranca-fundo.red.650.png' alt='Mitrione e Luckezzi - Advogados' />
          </Flex>
        </Flex>

        <Flex w={['100%', '100%', '100%', '50%']} align={['center', 'stretch']} justify='center' flexDirection={'column'} p={[2, 2, 2, 6]}>
          <Heading mb={6} as='h1'>Quem somos</Heading>
          <Text textAlign='justify' lineHeight={8}>A Mitrione e Luckezzi Advogados é um escritório especializado em assessoria jurídica de demandas que envolvem a necessidade de Leito Hospitalar com urgência. Possui atuação nacional de forma totalmente digital, personalizada e humanizada afim de promover a rápida solução das causas, prezando sempre pelo conforto e bem-estar de seus clientes. Conta com profissionais altamente capacitados na matéria, preocupados com a constante atualização de  seus conhecimentos para atendê-lo com a máxima eficácia.
          </Text>
          <Text fontWeight='bold' mt='4'>Entre em contato conosco para maiores informações. Será um prazer atende-lo.</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}