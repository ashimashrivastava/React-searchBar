/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Card from './Card'

function Results({item}) {
    return (
        <article className="anime-card">
            <a href={item.avatar_url} target="_blank" rel="noreferrer">
            <figure>
                <img src={item.avatar_url} alt="Avatar Image"></img>
            </figure>
            <h3>{item.login}</h3>
            
            <h3>{item.type}</h3>
            </a>
        </article>
    )
}

export default Results
