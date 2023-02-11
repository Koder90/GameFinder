import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, width } from "@mui/system";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import styles from "../styles/sidebar.module.css"
import Rating from "./Rating";
import css from "../styles/favorites.module.css"

type gameProps = {
  games: [],
  setGames: () =>  [],
  favorites: [],
  setFavorites: () => void
}


const Content = ({ games, setGames, favorites, setFavorites } : gameProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);


  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "7feb102cd6mshb854fa1414c91b8p18ebd2jsn8375ff2d9092",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const allGames = response.data;
        setGames(allGames);
      })
      .catch(function (error) {
        console.error(error);
      });

    const activeUser = async () => {
      const session = await getSession()
      if (session) {
        setLoggedIn(true)
      } else {
        loggedIn
      }
    }
    activeUser()
  }, []);

  const gamesPerPage = 20;
  const pagesVisited = pageNumber * gamesPerPage;
  const pageCount = Math.ceil(games.length / gamesPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const filterGenre = (curItem) => {
    const result = games.filter(game => {
      return game.genre === curItem;
    })
    setGames(result)
    console.log(games)
  }


  return (
    <>
      <Sidebar games={games} filterGenre={filterGenre} setGames={setGames}  />
      <Container>
        <Grid container spacing={6}>
          {games
            .slice(pagesVisited, pagesVisited + gamesPerPage)
            .map((game: { title: string; thumbnail: string; id: number; short_description: string }) => {
              return (
                <Grid item key={game.id}>
                  <Paper>
                    <Card sx={{ maxWidth: 245 }}>
                      <CardActionArea>
                        <Link href={"/" + game.id}>
                          <CardMedia
                            component="img"
                            image={game.thumbnail}
                            alt="green iguana"
                          />
                        </Link>
                        <CardContent>
                          <Typography>{game.title}</Typography>
                          {loggedIn ?
                           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Rating />
                            <button onClick={() => {
                               setFavorites([...favorites, <div className={css.favorites}>
                                <h3 className={css.header}>{game.title}</h3>
                                <p className={css.paragraph}>{game.short_description}</p>
                               </div> ])
                              console.log(favorites);
                              }} type="button" style={{padding:"4px", background:"black", color:"white", borderRadius:"5px"}}>Add</button>
                            </div>  : null}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Container>
      <div className="paginate">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>

  );
};

const Sidebar = ({ games, filterGenre }) => {
  const arr = games.map((game: { genre: string }) => game.genre);

  const category = arr.filter((item: {}, index: string) => arr.indexOf(item) === index);
  return (
    <div>

      <div className={styles.sidebar}>
        {category.map((item) => {
          return (
            <div onClick={() => filterGenre(item)} className={styles.item} key={item}>{item}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
