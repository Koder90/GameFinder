import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, width } from "@mui/system";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import styles from "../styles/sidebar.module.css"



const Content = ({ games, setGames }) => {
  const [pageNumber, setPageNumber] = useState(0);



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
        console.log(games)
      })
      .catch(function (error) {
        console.error(error);
      });
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
  }

  return (
    <>
      <Sidebar games={games} filterGenre={filterGenre} />
      <Container>
        <Grid container spacing={6}>
          {games
            .slice(pagesVisited, pagesVisited + gamesPerPage)
            .map((game: { title: string; thumbnail: string; id: number }) => {
              return (
                <Grid item key={game.id}>
                  <Paper>
                    <Card sx={{ maxWidth: 245 }}>
                      <Link href={"/" + game.id}>
                        <CardMedia
                          component="img"
                          image={game.thumbnail}
                          alt="green iguana"
                        />
                      </Link>
                      <CardContent>
                        <Typography>{game.title}</Typography>
                      </CardContent>
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
    <div className={styles.sidebar}>
      {category.map((item) => {
        return <div onClick={()=>filterGenre(item)} className={styles.item}>{item}</div>;
      })}
    </div>
  );
};

export default Content;
