import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import styles from "../styles/rating.module.css"

const Rating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label className='label'
          key={i}
          >
            <input
           
             style={{display: "none"}}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
            style={{cursor:"pointer"}}
            className='star'
            color={ratingValue <= rating ? "yellow" : "gray"}
            />
          </label>
        )
      })}
    </div>)
}

export default Rating;