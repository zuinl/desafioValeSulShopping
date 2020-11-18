import React from 'react'

import './style.css'

export default props => {
    const genres = props.genres || []
    const numberOfGenres = genres.length
    let genreIndex = 0

    return (
        <div className="movie-card">
            <div className="header">
                <div className="cover">
                    <img src={props.image} alt="Filme" />
                </div>
                <div className="content">
                    <h1>{props.name}</h1>
                    <h3>{props.year_publication}</h3>

                    <h2>{props.description}</h2>
                </div>
            </div>

            <div className="footer">
                <h2><b>Gêneros: </b> 
                    {genres.map(genre => {
                        genreIndex++

                        if(genreIndex < numberOfGenres)
                            return (
                                genre + ", "
                            )
                        else return (
                            genre
                        )
                    })}
                </h2>
                
                {props.featured &&
                    <div className="featured">DESTAQUE</div>}
            </div>
        </div>
    )
}

