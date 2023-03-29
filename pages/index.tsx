import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home({ games, setGames, favorites, setFavorites }) {

    return (
        <div>
            <Navbar />
            <Search />
            <Content favorites={favorites}
                setFavorites={setFavorites}
                games={games}
                setGames={setGames} />
            <Footer />
        </div>
    )
}
