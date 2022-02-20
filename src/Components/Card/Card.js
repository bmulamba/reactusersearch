import React from "react";
import './Card.css'

export const Card = (props) => (
    <div className="cart">
        <img alt="{user.id}" src={`https://robohash.org/${props.userUnic.id}/?set_set3/size=180x180`} />
        <h2>{props.userUnic.name}</h2>
        <h5>{props.userUnic.email} </h5>
    </div>
)