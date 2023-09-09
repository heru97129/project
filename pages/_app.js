import React from 'react'
import "../pages/globals.css";

function MyApp({Component,pageProps}) {


    return (
      <>
          <Component {...pageProps} />
  
  
      </>
    );
  }
  
  export default MyApp;
  