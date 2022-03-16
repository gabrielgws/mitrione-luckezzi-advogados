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

          {/* <!-- Primary Meta Tags - HomePage --> */}
          <meta name="google-site-verification" content="XwIfocCzlh12CujSBfjAjdWXmwdI9Doz9GMR6nnchkQ" />
          <meta name="title" content="Mitrione & Luckezzi - Advogados" />
          <meta name="description" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de Leito Hospitalar com urgência." />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mitrioneluckezziadvogados.com.br/" />
          <meta property="og:title" content="Mitrione & Luckezzi - Advogados" />
          <meta property="og:description" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de Leito Hospitalar com urgência." />
          <meta property="og:image" content="" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://mitrioneluckezziadvogados.com.br/" />
          <meta property="twitter:title" content="Mitrione & Luckezzi - Advogados" />
          <meta property="twitter:description" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de Leito Hospitalar com urgência." />
          <meta property="twitter:image" content="" />

          {/* <!-- Primary Meta Tags - LHU --> */}
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mitrioneluckezziadvogados.com.br/lhu/" />
          <meta property="og:title" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de .css-1dqvvqi{color:var(--chakra-colors-red-650);}Leito Hospitalar com urgência." />
          <meta property="og:description" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de Leito Hospitalar com urgência." />
          <meta property="og:image" content="" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://mitrioneluckezziadvogados.com.br/lhu/" />
          <meta property="twitter:title" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de .css-1dqvvqi{color:var(--chakra-colors-red-650);}Leito Hospitalar com urgência." />
          <meta property="twitter:description" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de Leito Hospitalar com urgência." />
          <meta property="twitter:image" content="" />

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