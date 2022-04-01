// pages/_app.js
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'
// importing bootstrap js
import("bootstrap/dist/js/bootstrap");

import '../styles/extras/grid-layout.css'
// import '../styles/extras/global-components.css'
// import '../styles/globals.css'
// import '../styles/extras/styled-sections.css'
import '../styles/pagestyles.css'
// import '../styles/Navbar.styles.css'


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false



// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



function MyApp({ Component, pageProps }) { 
  const { locale, locales } = useRouter();
  useEffect(() => {

    // Declaring new date

    if (locale == "en") {
      import(`../styles/globals-en.css`);
      import(`../styles/Navbar.styles-en.css`)
      import(`../styles/extras/global-components-en.css`)
      import(`../styles/extras/styled-sections-en.css`)
    } else if (locale == "ar") {
      import(`../styles/globals-ar.css`);
      import(`../styles/Navbar.styles-ar.css`)
      import(`../styles/extras/global-components-en.css`)
      import(`../styles/extras/styled-sections-ar.css`)
    } else {
      import(`../styles/globals-en.css`);
      import(`../styles/Navbar.styles-en.css`)
      import(`../styles/extras/global-components-en.css`)
      import(`../styles/extras/styled-sections-en.css`)
    }


  }, []);
  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>

  return <Component {...pageProps} />
}

export default MyApp


