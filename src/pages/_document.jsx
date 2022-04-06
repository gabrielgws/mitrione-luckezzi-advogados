import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head>
          
          {/* <!-- Global site tag (gtag.js) - Google Ads --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10841279173" />
          <script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-10841279173');`}} />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>

          <meta name="keywords" content="advogado, advogados, adevogado, adevogados, Mitrione Advogado, Luckezzi Advogado, Mitrione & Luckezzi, Belo Horizonte (MG), leito hospitalar, Leito urgente, Nova lima" />
          <meta name="description" content="Assessoria jurídica especializada em demandas que envolvem a necessidade de Leito Hospitalar com urgência." />
          <meta name="author" content="Mitrione & Luckezzi - Advogados" />
          <meta name="creator" content="@gabrielgws" />
          <meta name="robots" content="index, follow" />

          {/* <!-- Google Tag Manager --> */}
          <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMJHQW4');`}} />
          {/* <!-- End Google Tag Manager --> */}

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
          {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript dangerouslySetInnerHTML={{ __html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMJHQW4"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
            {/* <!-- End Google Tag Manager (noscript) --> */}
          <title>Mitrione & Luckezzi - Advogados</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}