import React from "react";
import mainImage from "../images/Group77.png"

function Main() {
    return (
        <section className="main-section">
            <img className="main-section__img" src={mainImage} />
            <h1>Online Experience</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
}

export default Main