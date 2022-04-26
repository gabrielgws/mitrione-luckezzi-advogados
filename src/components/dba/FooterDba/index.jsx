import { Box, Button, Center, Flex, Heading, HStack, IconButton, Image, space, Spacer, Text } from "@chakra-ui/react";

import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function FooterDba(){
  return(
    <Flex w='100%' align='center' justify='center' boxShadow='dark-lg'>
      <Center
        as='footer'
        w='100%'
        pt={[8, 8, 16, 8]}
        pb={[8, 8, 16, 16]}
        px={[4, 6, 6, 10]}
        maxWidth={1480}
      >
        <Flex w='100%' align='center' justify='center' flexDirection='column' color='red.650'>
          <Box boxSize={['12rem', '14rem']}>
            <Image src='/images/logo.webp' w='500px' alt='Logo' />
          </Box>

          <Flex flexDirection='column' align='center' justify='center'>
            <Heading as='h1' fontSize='1.5rem' align='center' justify='center'>Informações do escritório:</Heading>

            {/* Inicio box footer */}
            <Flex mt={8} align='center' justify='center'>
              <HStack spacing={4}>
                <Heading as='h2' fontSize='1.5rem'><FaPhoneAlt /></Heading>
                <Text as='h3' fontSize={['1rem','1.3rem']}>(31) 9 9486-6990</Text>
              </HStack>
            </Flex>
            {/* Fim box footer */}

            {/* Inicio box footer */}
            <Flex mt={8} align='center' justify='center'>
              <HStack spacing={4} >
                <Heading as='h2' fontSize='1.5rem'><MdEmail /></Heading>
                <Text as='h3' fontSize={['0.8rem', '1rem', '1rem','1.3rem']}>contato@mitrioneluckezziadvogados.com.br</Text>
              </HStack>
            </Flex>
            {/* Fim box footer */}

            {/* Inicio box footer */}
            <Flex mt={8} align='center' justify='center'>
              <HStack spacing={4}>
                <Heading as='h2' fontSize='1.5rem'><FaMapMarkerAlt /></Heading>
                <Text as='h3' fontSize={['1rem','1.3rem']}>Rua Espirito Santo, 773, Água limpa, Raposos/MG<br/> CEP: 34.400-000</Text>
              </HStack>
            </Flex>
            {/* Fim box footer */}

          </Flex>
        </Flex>
      </Center>
    </Flex>
  )
}