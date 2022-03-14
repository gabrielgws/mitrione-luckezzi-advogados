import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Image, Center, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function HomePage(){
  return(
    <Center bg='red.650' h='100vh' flexDirection='column' pt={32}>
      <Link href='/lhu' passHref _hover={{textDecoration:'none'}}>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme='gray' color='white' _hover={{ color: 'gray.800', bg: 'white'}} variant='outline'>
          Leito Hospitalar
        </Button>
      </Link>
      <Center boxSize='sm' w='100%'>
        <Image src='/images/logoBranca-fundo.red.650.png' alt='Mitrione e Luckezzi - Advogados' />
      </Center>
    </Center>
  )
}