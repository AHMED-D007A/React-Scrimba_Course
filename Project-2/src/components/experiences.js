import React from "react";

export default function Experiences(props) {
    let badgeText;
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.data.location === "online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText && <div className="badgedText">{badgeText}</div>}
            <img className="card--img" src={props.data.image} />
            <p className="card--p1">
                <img className="card--star" src="Star 1.png" />
                {`${props.data.states.rating} (${props.data.states.reviewCount}) - USA`}
            </p>
            <p className="card--p2">{props.data.title}</p>
            <p className="card--p3"><span className="bold">{`From ${props.data.price}$`}</span> / Person</p>
        </div>
    )
}