import React from 'react'
import styles from '../styles/Search.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Search = () => {
    return (
        <div  className={styles.form}>
            <form>
            <TextField id="outlined-basic" label="search game..." variant="outlined" size="small" />                
            <Button  style={{height: "38px"}} className='btn' variant="contained" size="small">Submit</Button>
            </form>
        </div>
    )
}

export default Search
