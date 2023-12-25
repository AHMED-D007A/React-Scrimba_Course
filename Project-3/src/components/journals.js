import React from "react";

export default function Journals(props) {
    return (
        <div className="journals">
            <img className="j--img" src={props.data.image} />
            <div className="line1">
                <img className="j--logo" src="Fill 219.png" />
                <p className="j--country">{props.data.country}</p>
                <a className="j--link" target="_blank" href={props.data.googleMaps}>View on Google Maps</a>
            </div>
            <h1 className="j--h1">{props.data.place}</h1>
            <p className="j--date">{props.data.date}</p>
            <p className="j--dis">{props.data.discription}</p>
        </div>
    )
}