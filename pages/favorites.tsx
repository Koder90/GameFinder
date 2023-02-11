import React from 'react'

const favorites = ({ favorites }) => {
  return (
    <div className='favorites'>{favorites.map(item =>{
      console.log(favorites)
      return (    
        <h1>{item}</h1>
      )
    })}</div>
  )
}

export default favorites