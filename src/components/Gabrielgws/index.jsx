import { Flex, Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";

import { RiComputerLine } from 'react-icons/ri'

export function Gabrielgws(){
  return(
    <Center py={[8, 8, 16, 8]} w='100%'>
      <Center>
        <Text mr={2}><RiComputerLine/></Text>
        <Text>Desenvolvido por <a href='https://www.gabrielgws.com/' target='_blank' rel='noopener noreferrer'>@gabrielgws</a></Text>
      </Center>
    </Center>
  )
}