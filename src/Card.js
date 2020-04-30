import React from 'react';

function Card(props) {
    
    console.log('Props from Nasa data', props.nasaData);
    return (
        <div>
            <h2>{props.nasaData.title}</h2>
            <h3>{props.nasaData.date}</h3>
            <img className="container" src={props.nasaData.hdurl} alt="space" />
            <p className="container" >{props.nasaData.explanation}</p>
        </div>

    )

}

export default Card;