import React from 'react'
import './Hero.css'

export default function Hero() {
    return(
        <div className="hero-section">
            <img className="hero-section-img" src="./photo-grid.png"></img>
            <div className="hero-section-writing">
                <h1 className="hero-section-title">Online Experiences</h1>
                <p className="hero-section-description">
                    Join unique interactive activities led by <br />
                    one-of-a-kind hosts-all without leaving <br />
                    home.
                </p>
            </div>
        </div>

    )
}