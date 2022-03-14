import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>

          <meta name="keywords" content="advogado, advogados, adevogado, adevogados, Mitrione Advogado, Luckezzi Advogado, Mitrione & Luckezzi, Belo Horizonte (MG), leito hospitalar, Leito urgente, Nova lima" />
          <meta name="description" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de Leito Hospitalar com urgência." />
          <meta name="author" content="Mitrione & Luckezzi - Advogados" />
          <meta name="creator" content="@gabrielgws" />
          <meta name="robots" content="index, follow" />
        </Head>

        <body>
          <title>Mitrione & Luckezzi - Advogados</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}