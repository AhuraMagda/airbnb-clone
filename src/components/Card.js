import React from "react";
// import cardPhoto from "../images/firstcard.png";
import starIcon from "../images/star.png";

function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={props.item.coverImg}/>
            <div className="card--stats">
                <img className="card--star-icon" src={starIcon} />
                <span>{props.item.stats.rating}</span>
                <span className="grey-text">({props.item.stats.reviewCount})</span>
                <span className="grey-text">• {props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><b>From {`$${props.item.price}`}</b> / person</p>
        </div>
    )
}

export default Card