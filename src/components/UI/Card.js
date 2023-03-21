import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
    // props.className is used to add the className from the parent component
    return <div className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
}

export default Card;