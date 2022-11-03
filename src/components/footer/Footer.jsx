import React from "react";
import './footer.scss'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer" >
            <div className="footer__content container">
                <div className="footer__content__logo">
                <div className="logo">
                    <Link to="/" >visit <span className="red" >Norway</span> </Link>
                </div>
                </div>
                    <div className="footer__content__menu">
                        <Link to="/imprint"  >Imprint</Link>
                        <Link to="/contact" className="link" >Contact</Link>
                    </div>
            </div>
        </div>
    )
}

export default Footer