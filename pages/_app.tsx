import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";



function MyApp({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);
  const [games, setGames] = useState([]);

  return (
    <SessionProvider session={pageProps.session}>
      <Component
        {...pageProps}
        favorites={favorites} 
        setFavorites={setFavorites}
        games={games}
        setGames={setGames}
      />
    </SessionProvider>
  )
}

export default MyApp
