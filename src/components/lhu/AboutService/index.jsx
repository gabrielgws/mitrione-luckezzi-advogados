import { Box, Flex, Heading} from "@chakra-ui/react";

import { BsChatText } from 'react-icons/bs';
import { RiCustomerService2Line } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';

export function AboutService(){
  return(
    <Flex w='100%' align='center' justify='center'>
    <Flex
      w='100%'
      align='center' justify='center'
      bgImage='/images/leito-hospitalar3-T60.webp'
      bgPosition="center"
      bgSize='cover'
      bgRepeat="no-repeat"
    >
      <Flex
        w='100%'
        align='center'
        justify='center'
        py={[16, 16, 24, 32]}
        maxWidth={1480}
        flexDirection='column'
      > 
        <Heading>Nossos diferenciais:</Heading>

        <Flex w='100%' p={6} align='center' justify='center' flexDirection={['column', 'column', 'column', 'row']}>
            <Box bg='whiteAlpha.600' p={5} w='100%' borderRadius={6} align='center' justify='center'>
              <Heading as='h2' mt={[10, 0]} mb={4}><BsChatText fontSize='3rem'/></Heading>
              <Heading as='h3' size='md'>Atendimento personalizado<br/> e humanizado</Heading>
            </Box>
            
            <Box bg='whiteAlpha.600' m={4} p={8} w='100%' borderRadius={6} align='center' justify='center'>
              <Heading as='h2' mt={[10, 0]} mb={4}><IoIosPeople fontSize='3rem'/></Heading>
              <Heading as='h3' size='md'>Limite de clientes</Heading>
            </Box>

            <Box p={8} bg='whiteAlpha.600' w='100%' borderRadius={6} align='center' justify='center'>
              <Heading as='h2' mt={[10, 0]} mb={4}><RiCustomerService2Line fontSize='3rem'/></Heading>
              <Heading as='h3' size='md'>Suporte em tempo integral</Heading>
            </Box>
        </Flex>
      </Flex>
    </Flex>
    </Flex>
  )
}