import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Content from '../components/Content'
import { useState } from 'react'

export default function Home({ loggedIn, setLoggedIn }) {
    const [games, setGames] = useState([]);


    return (
        <div>
            <Navbar />
            <Search />
            <Content games={games} setGames={setGames} />
        </div>
    )
}
