import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';



function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <SessionProvider session={pageProps.session}>
      <Component
        {...pageProps}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
    </SessionProvider>
  )
}

export default MyApp
