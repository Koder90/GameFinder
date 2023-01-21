import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";



function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component
        {...pageProps}
      />
    </SessionProvider>
  )
}

export default MyApp
