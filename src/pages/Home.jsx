import React from "react";

import './home.scss'
import tour1 from '../assets/northern.jpg'
import background6 from '../assets/background6.jpg'
import HeroSlide from '../components/hero-slide/HeroSlide'

const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="tours">
            <h2 className="title" >Popular Tours</h2>
            <div className="tour">
                <div className="card">
                    <p className="date">17.12.2022</p>
                    <p className="name">Northern Lights</p>
                    <img src={tour1} alt="" className="photo" />
                    <button className="price">149$</button>
                </div>
                <div className="card">
                    <p className="date">01.01.2023</p>
                    <p className="name">Oslo</p>
                    <img src={background6} alt="" className="photo" />
                    <button className="price">99$</button>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Home