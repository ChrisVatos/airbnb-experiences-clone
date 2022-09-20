import React from 'react'
import './Card.css'

export default function Card() {
    return(
        <div className="card-container">
            <img className='card-image' src='./katie-zaferes.png' alt="swimmer"></img>
            <div className='rating'>
                <img className='star-image' src='./star.png' alt='star'></img>
                <h4 className='rating-country'> 5.0 <span>(6) • USA</span></h4>
            </div>
            <h3 className="description">Life lessons with Katie Zaferes</h3>
            <h4 className="price">From 136$  <span> / person </span></h4>
        </div>
    );
}