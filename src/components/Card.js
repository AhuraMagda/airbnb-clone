import React from "react";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img className="card__photo" src={props.item.coverImg} alt="card" />
      <div className="card__stats">
        <img
          className="card__star-icon"
          src="../images/star.png"
          alt="star icon"
        />
        <span>{props.item.stats.rating}</span>
        <span className="grey-text">({props.item.stats.reviewCount})</span>
        <span className="grey-text">• {props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <b>From {`$${props.item.price}`}</b> / person
      </p>
    </div>
  );
}

export default Card;
