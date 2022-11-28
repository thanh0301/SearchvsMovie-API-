import React from 'react'
import "./MovieCard.css"

const MovieCard = (props) => {

    const API_IMG ="https://image.tmdb.org/t/p/w500/";
    

  return (
   <div className='card'>
      <div className='poster'>
          <img src= {props.poster_path ?   API_IMG + props.poster_path : "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png"} />
      </div>

      <div className='info'>
        <p className='title' >{props.title}</p>
        <p className='vote'>{props.vote_average}</p>
      </div>
      <div className='overview'>
      < h2 className='title_overview'></h2>
      <h3 className='overview_info'>{props.overview}</h3>
      </div>
   </div>
      
  )
}

export default MovieCard