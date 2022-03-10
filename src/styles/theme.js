import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({

  colors:{
    red: {
      "500": "#E53E3E",
      "650": "#85181E"
    }
  },
  fonts: {
    headings: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900'
      }
    }
  }
})