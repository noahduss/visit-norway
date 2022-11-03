import React from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import Home from "./Home";
import './contact.scss'

const Contact = () => {
    return (
        <>
            <PageHeader />
            <div className="contact">
                <h2 className="tit">Contact</h2>
                <form action={Home}>
                    <div className="form subject">
                        <p>Subject</p>
                        <input type="text" placeholder="subject" required />
                    </div>
                    <div className="form email">
                        <p>Email</p>
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="form message">
                        <p>Message</p>
                        <input type="text" placeholder="Please enter your message" required />
                    </div>
                    <button type="submit">Send Email</button>
                </form>
            </div>
        </>

    )
}

export default Contact