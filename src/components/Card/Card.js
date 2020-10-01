import React from "react";
import {CardContainer} from "./Card.styles";
// import { Link } from "react-router-dom";

const Card=({title,body,itemId})=>{
    return(
      <CardContainer>
        <h3>{title}</h3>
        <p>{body}</p>
        read more
      </CardContainer>
    )
};
export default Card ;