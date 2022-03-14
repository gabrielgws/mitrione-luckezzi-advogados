import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, IconButton, Image, Spacer, useBreakpointValue, useDisclosure } from "@chakra-ui/react";

import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiMenuLine } from 'react-icons/ri';

export function Header(props){
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  })

  return(
    <Center
      as='header'
      w='100%'
      shadow='md'
      top='0'
      bg='gray.50'
      {...props}
    >
      <Center
        w='100%'
        h='20'
        my={8}
        px='6'
        maxWidth={1480}
      >
        <Center w='100%'>
          <Box boxSize={['8rem', '12rem']}>
            <Image src="/images/logo.png" alt="Logo - Mitrione & Luckezzi - Advogados" />
          </Box>
          <Spacer />
          { isWideVersion && (
          <Box>
              <Button
                p={6}
                fontSize={[14, 16]}
                as='a'
                href='https://api.whatsapp.com/send?phone=553194866990'
                leftIcon={<FaWhatsapp/>}
                colorScheme='whatsapp'
                variant='solid'
              >
                (31) 9 9486-6990
              </Button>
          </Box>
        )}

        {!isWideVersion && (
          <>
            <IconButton
              aria-label="Open Navigation"
              icon={<Icon as={RiMenuLine} />}
              fontSize="24"
              variant="unstyled"
              onClick={onOpen}
              mr="2"
              display="flex"
              align="center"
              color='red.650'
            >
              
            </IconButton>
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton mt="6" color='red.650'/>
              {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
              <DrawerBody display='flex' pt={24} align='center' justify='center'>
                <Box w='100%' display='flex' flexDirection='column' align='center'>
                <Button
                  fontSize={12}
                  as='a'
                  href='https://api.whatsapp.com/send?phone=553194866990'
                  leftIcon={<FaWhatsapp/>}
                  colorScheme='teal'
                  variant='solid'
                >
                  (31) 9 9486-6990
                </Button>
              </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          </>
        )}
        </Center>
      </Center>
    </Center>
  )
}