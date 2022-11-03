import React from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import './tours.scss'
import tour1  from '../assets/northern.jpg'
import tour2  from '../assets/tour2.jpg'
import tour3  from '../assets/tour3.jpg'
import background3 from '../assets/background3.jpg'
import background5 from '../assets/background5.jpg'
import background6 from '../assets/background6.jpg'

const Tours = () => {
    return (
        <>
        <PageHeader />
        <div className="main">
            <div className="card">
                <p className="date">17.12.2022</p>
                <p className="name">Bergen</p>
                <img src={tour2} alt="" className="photo" />
                <button className="price">249$</button>
            </div>
            <div className="card">
                <p className="date">01.01.2023</p>
                <p className="name">Oslo</p>
                <img src={background6} alt="" className="photo" />
                <button className="price">99$</button>
            </div>
            <div className="card">
                <p className="date">17.12.2022</p>
                <p className="name">Northern Lights</p>
                <img src={tour1} alt="" className="photo" />
                <button className="price">149$</button>
            </div>
            <div className="card">
                <p className="date">01.01.2023</p>
                <p className="name">Northern Lights</p>
                <img src={background3} alt="" className="photo" />
                <button className="price">131$</button>
            </div>
            <div className="card">
                <p className="date">17.12.2022</p>
                <p className="name">Mountains</p>
                <img src={tour3} alt="" className="photo" />
                <button className="price">199$</button>
            </div>
            <div className="card">
                <p className="date">17.12.2022</p>
                <p className="name">Tromso</p>
                <img src={background5} alt="" className="photo" />
                <button className="price">76$</button>
            </div>
        </div>
        </>
    )
}

export default Tours