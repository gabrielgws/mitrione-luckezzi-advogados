import { Center, Flex, Heading, Image, Text} from "@chakra-ui/react";

export function OtherServicesDba(){
  return(
    <Flex w='100%' align='center' justify='center'>
    <Flex
      w='100%'
      align='center' justify='center'
      bg='red.650'
      color='gray.50'
    >
      <Flex
        w='100%'
        align='center'
        justify='center'
        py={[16, 16, 24, 32]}
        maxWidth={1480}
        flexDirection='column'
      > 
        <Heading>Outros serviços:</Heading>

        <Flex mt={12} p={2}>
          <Flex gap={[2, 6]} align='center' justify='center'>
            <Image src='/images/taxa-de-juro.webp' w='88px' h='88px' alt='Ícone Taxa de juros' />
            <Flex flexDirection='column' maxWidth='500px'>
              <Heading as='h1' fontSize='1.2rem'>Revisão de juros abusivos</Heading>
              <Text mt={4}>
                Seu contrato de financiamento pode conter juros abusivos. Conte conosco para uma avaliação que pode chegar a 70% de revisão no valor final. Pague o justo.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        
      </Flex>
    </Flex>
    </Flex>
  )
}