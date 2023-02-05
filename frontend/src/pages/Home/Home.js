import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>AuraYoga</h1>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn">
                        About
                    </button>
                </Link>
            </div>
            <h1 className="description">Yoga Posture Proficiency Using AI</h1>
            <div className="home-main">
                <div id="about-desc">
                <p>
                Aura Yoga is an AI that helps you perfect that yoga pose you've always wanted to try!<br></br>
                Get started to clear your mind of clutter and stretch your body,<br></br>
                after all, yoga is the ultimate act of harmony between one's physical existence <br></br>
                and spiritual conscience. </p>
                    </div>
            <div className="btn-section">
                    <Link to='/start'>
                        <button className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                </div> 
            </div>
        </div>
    )
}