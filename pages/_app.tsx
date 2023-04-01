import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import Footer from '../components/Footer'
import { useState } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from '../components/Navbar';

export type gameProps = {
  games: [{}],
  setGames: ({ }) => [{}],
  favorites: [{}],
  setFavorites: ({ }) => [{}]
}

function MyApp({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);
  const [games, setGames] = useState([]);

  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component
        {...pageProps}
        favorites={favorites}
        setFavorites={setFavorites}
        games={games}
        setGames={setGames}
      />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp
