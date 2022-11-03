import React from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import './gallery.scss'

import tour1  from '../assets/northern.jpg'
import tour2  from '../assets/tour2.jpg'
import tour3  from '../assets/tour3.jpg'
import background1 from '../assets/background1.jpg'
import background2 from '../assets/background2.jpg'
import background3 from '../assets/background3.jpg'
import background4 from '../assets/background4.jpg'
import background5 from '../assets/background5.jpg'
import background6 from '../assets/background6.jpg'
import poster1 from '../assets/poster1.jpg'
import poster2 from '../assets/poster2.jpg'
import poster3 from '../assets/poster3.jpg'
import poster4 from '../assets/poster4.jpg'
import bg1 from '../assets/images.jpg'


const Gallery = () => {


    return (
        <>
        <PageHeader />
        <div className="gallery">
            <img src={background1} alt="Norway Cities and Landscape"/>
            <img src={background2} alt="Norway Cities and Landscape"/>
            <img src={background3} alt="Norway Cities and Landscape"/>
            <img src={background4} alt="Norway Cities and Landscape"/>
            <img src={background5} alt="Norway Cities and Landscape"/>
            <img src={background6} alt="Norway Cities and Landscape"/>
            <img src={poster1} alt="Norway Cities and Landscape"/>
            <img src={poster2} alt="Norway Cities and Landscape"/>
            <img src={poster3} alt="Norway Cities and Landscape"/>
            <img src={poster4} alt="Norway Cities and Landscape"/>
            <img src={tour1} alt="Norway Cities and Landscape"/>
            <img src={tour2} alt="Norway Cities and Landscape"/>
            <img src={tour3} alt="Norway Cities and Landscape"/>
            <img src={bg1} alt="Norway Cities and Landscape"/>
            <img src={background1} alt="Norway Cities and Landscape"/>

        </div>
        </>
    )
}

export default Gallery