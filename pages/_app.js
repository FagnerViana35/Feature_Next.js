import App from 'next/app';
import GlobalStyles from '../src/assets/theme/style-Global' 
import Head from 'next/head';
class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props;
  
      return (
        <>
         <Head>
         {/* <!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-BQ1DSZLJ80"></script>
          <script
            dangerouslySetInnerHTML={{
              __html:`
                }}window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-BQ1DSZLJ80');`
            }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()}/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
         </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      );
    }
  }
  
  export default MyApp;
  //https://nextjs.org/docs/pages/building-your-application/routing/custom-app