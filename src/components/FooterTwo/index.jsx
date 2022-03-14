import { Center, Flex, Heading, Text } from "@chakra-ui/react";

export function FooterTwo(){
  return(
    <Flex w='100%' align='center' justify='center' bg='red.650' color='gray.50'>
      <Center
        as='footer'
        w='100%'
        py={[8, 8, 16, 20]}
        maxWidth={1480}
      >
        <Flex w='100%' align='center' justify='center' flexDirection='column'>
          <Flex flexDirection={['column', 'column', 'column', 'row']} align='center' justify='center'>
            <Heading as='h1' fontSize='1rem' mr={[0, 8]} mb={[4, 4, 4, 0]}>Mitrione & Luckezzi - Advogados</Heading>
            <Heading
              as='h1'
              fontSize='1rem'
              fontWeight='normal'
              display={['block',
              'inline-block']}
            >© todos os direitos reservados</Heading>
          </Flex>
          <Flex pt={8} flexDirection='column'><Text>OAB/MG 184.211</Text></Flex>
        </Flex>
      </Center>
    </Flex>
  )
}