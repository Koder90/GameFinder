import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const getStaticPaths = async () => {
    const data = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'X-RapidAPI-Key': '7feb102cd6mshb854fa1414c91b8p18ebd2jsn8375ff2d9092',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }).then(res => res.json());


    // map data to an array of path objects with params (id)
    const paths = data.map(game => {
        return {
            params: {
                id: game.id.toString()
            }
        }
    })
    return {paths, fallback: false}
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await fetch(`https://www.freetogame.com/api/game?id=${id}`, {
        headers: {
            'Content-type': 'application/json',
            'X-RapidAPI-Key': '7feb102cd6mshb854fa1414c91b8p18ebd2jsn8375ff2d9092',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }

    }).then(res => res.json());


    return {
        props: {
            game: data
        }
    }
}

const Details = ({game}) => {
    return (
        <div className="details">
            <Card sx={
                {maxWidth: 545}
            }>
                <CardActionArea>
                    <CardMedia component="img" height="140"
                        image={
                            game.thumbnail
                        }
                        alt="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {
                            game.title
                        } </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {
                            game.short_description
                        } </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href={
                                game.game_url
                            }
                            target="_blank">Check it out!</a>
                    </Button>
                    <Button size="small" color="primary">
                        <a href='/'>Home</a>
                    </Button>
                </CardActions>
            </Card>

            <List sx={
                {
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    marginLeft: '20px'
                }
            }>
                <ListItem alignItems="flex-start">

                    <ListItemText primary={
                        `Developer: ${
                            game.developer
                        }`
                    }/>
                </ListItem>
                <Divider variant="fullWidth" component="li"/>
                <ListItem alignItems="flex-start">

                    <ListItemText primary={
                        `Platform: ${
                            game.platform
                        }`
                    }/>
                </ListItem>
                <Divider variant="fullWidth" component="li"/>
                <ListItem alignItems="flex-start">

                    <ListItemText primary={
                        `Genre: ${
                            game.genre
                        }`
                    }/>
                </ListItem>
            </List>
        </div>
    );
}

export default Details;
