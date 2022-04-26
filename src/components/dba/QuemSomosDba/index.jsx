import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export function QuemSomosDba(){
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
            <Image src='/images/logoBranca-fundo.red.650.webp' w='500px' alt='Mitrione e Luckezzi - Advogados' />
          </Flex>
        </Flex>

        <Flex w={['100%', '100%', '100%', '50%']} align={['center', 'stretch']} justify='center' flexDirection={'column'} p={[2, 2, 2, 6]}>
          <Heading mb={6} as='h1'>Quem somos</Heading>
          <Text textAlign='justify' lineHeight={8}>A Mitrione e Luckezzi Advogados é um escritório especializado em assessoria jurídica de demandas que envolvem Defesa de Ações de Busca e Apreensão. Através de uma atuação personalizada e <strong>humanizada</strong> buscamos promover <strong>solução</strong> das causas que envolvam nossos clientes, prezando sempre pelo seu <strong>conforto e bem-estar</strong>, tanto de forma presencial quanto totalmente digital.
          </Text>

          <Text textAlign='justify' lineHeight={8}>Conte com profissionais altamente capacitados na matéria, preocupados com a constante atualização de  seus conhecimentos para atendê-lo com a máxima eficácia.

          </Text>
          <Text fontWeight='bold' mt='4'>Entre em contato conosco para maiores informações. Será um prazer atende-lo.</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}