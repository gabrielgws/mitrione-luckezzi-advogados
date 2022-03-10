import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Image, Center, Button, Link } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home(){
  return(
    <Center bg='red.650' h='100vh' flexDirection='column'>
      <Header />
      <Link to='/leito-hospitalar' _hover={{textDecoration:'none'}}>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme='gray' color='white' _hover={{ color: 'gray.800', bg: 'white'}} variant='outline'>
          Leito Hospitalar
        </Button>
      </Link>
      <Image src='/images/logoBranca-fundo.red.650.png' alt='Mitrione e Luckezzi - Advogados' />
    </Center>
  )
}