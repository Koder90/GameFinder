import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Content from '../components/Content'

import { useState } from 'react'

export default function Home({ games, setGames, favorites, setFavorites }) {

    return (
        <div>
            <Search />
            <Content favorites={favorites}
                setFavorites={setFavorites}
                games={games}
                setGames={setGames} />
        </div>
    )
}
