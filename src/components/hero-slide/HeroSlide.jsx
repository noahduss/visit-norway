import React from "react";

import './hero-slide.scss'

import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import background1 from '../../assets/background1.jpg'
import background2 from '../../assets/background2.jpg'
import background3 from '../../assets/background3.jpg'
import background4 from '../../assets/background4.jpg'
import poster1 from '../../assets/poster1.jpg'
import poster2 from '../../assets/poster2.jpg'
import poster3 from '../../assets/poster3.jpg'
import poster4 from '../../assets/poster4.jpg'

const HeroSlide = () => {

    const movieItems = [
        {
            title: 'Norway',
            overview: 'There are many reasons to visit Norway. Mountains, fjords, Northern Lights, Sami culture, whale watching and so much more is waiting for you, and the Norwegian people will be happy to welcome you. If you visit Norway we can guarantee you once-in-a-liftetime experiences and a chance to check off your bucketlist.',
            poster: poster1,
            background: background1
        },
        {
            title: 'Cities',
            overview: 'Norway was voted the happiest country in the world in 2017, judged on factors including caring, freedom, generosity, honesty, health, income and good governance.',
            poster: poster2,
            background: background2
        },
        {
            title: 'Landscape',
            overview: 'Witness Masterpieces of Nature – Majestic Fjords and Waterfalls. Since Norway offers a long list of hiking trails, mountain summits, and cascading waterfalls to the travelers wishing to see some of Europe\'s most stunning views, it is often on the top of the list for nature enthusiasts too.',
            poster: poster3,
            background: background3
        },
        {
            title: 'Just Amazing',
            overview: 'Conclusively, Norway is a great country to visit since it is rich in history and natural beauty, as well as a variety of amazing prospects and experiences, which is why we’d say everyone should visit Norway once in their life. In fact, it is without a doubt one of the most naturally beautiful countries on the planet. This Nordic nation is intriguing because it is brimming with incredible experiences that must be explored first hand, whether you\'re summiting its towering mountains, traversing its deep fjords, or visiting its clean, culture-infused cities.',
            poster: poster4,
            background: background4
        },
    ]



    SwiperCore.use([Autoplay])

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i} >
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const handleClick = () => {
    window.location.href = '/gallery'
}
    


const HeroSlideItem = props => {
    const item = props.item
    const background = item.background

    return (
        <div className={`hero-slide__item ${props.className}`} style={{ backgroundImage: `url(${background})` }} >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <button className={`btn`} onClick={handleClick} >
                            View More
                        </button>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={item.poster} alt=" Poster" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlide