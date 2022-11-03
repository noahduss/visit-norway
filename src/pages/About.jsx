import React from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import './about.scss'

const About = () => {
    return (
        <div>
            <PageHeader/>
            <div className="cont">
                <h2 className="title">About Norway</h2>
                <iframe src="https://en.wikipedia.org/wiki/Norway" frameborder="0" className="wiki" title="Norway wiki" ></iframe>
            </div>
            
        </div>
    )
}

export default About