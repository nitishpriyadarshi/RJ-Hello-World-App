import React from "react";
import './Home.css'
import logo from '../BridgeLabz-2.jpg'


function Home() {
    return (
        <div>
            <header>Home</header>
            <article>
                <div className="box">
                    Vision Be Synonymous With Employability
                    <br />
                    <div>
                        <img src={logo}  alt='The Bridgelabz logo: a Bridge to Employement through lab Works' />
                    </div>
                    <br />
                    Mission Impact 1 Million Jobs By 2025
                </div>
            </article>
        </div>
    );
}
export default Home;