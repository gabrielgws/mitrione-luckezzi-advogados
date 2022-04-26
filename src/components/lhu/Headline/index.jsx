import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Form from "./Form";

import { FaWhatsapp } from "react-icons/fa";

export function Headline(){
  return(
    <Flex w='100%' align='center' justify='center' >
    <Flex
      w='100%'
      align='center' justify='center'
      bgImage='/images/leito-hospitalar2-T60.webp'
      bgPosition="center"
      bgSize='cover'
      bgRepeat="no-repeat"
    >
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
        <Box bg='whiteAlpha.400' shadow='dark-lg' borderRadius={6} p={[2, 2, 2, 8]}  w={['100%','100%', '48%', '50%']} align={['center', 'start']} mb={8}>
          <Heading
            textAlign={['center', 'center', 'start']}
            as='h1'
            mb={6}
          >
              Assessoria jurídica especializada em demandas que envolvem a
              necessidade de <Text as='span' color='red.650'>Leito Hospitalar com urgência</Text>.
          </Heading>
          <Button
            w='100%'
            fontSize='1rem'
            as='a'
            href='https://api.whatsapp.com/send?phone=553194866990'
            leftIcon={<FaWhatsapp size='1.3rem'/>}
            colorScheme='whatsapp'
            variant='solid'
          >
            Fale conosco agora
          </Button>
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