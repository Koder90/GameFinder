import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { Icon } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';

const favorites = ({ favorites, setFavorites }) => {

  const removeItem = (favorites, item) => {
    let newArray = [...favorites]
    const index = newArray.findIndex(element => element === item)
    if (index !== -1) {
      newArray.splice(index, 1)
      setFavorites(newArray)
    }
  }

  console.log(favorites)
  return (
    <div className='favorites'>
      <h1>Favorite List</h1>
      {favorites.map(item => {
        return (
          <Grid sx={{ width: 500 }} item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            </Typography>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <button onClick={() => removeItem(favorites, item)}><DeleteIcon /></button>
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <MovieIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.props.children[0].props.children}
                />
              </ListItem>,
            </List>
          </Grid>

        )
      })}</div>
  )
}

export default favorites