import react from "react";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
const Card = ({key,title,price,rating,image,link}) => {
  return (
    <>
      <Link to={link} target="blank">
        <div className="card">
        <img src={image} alt="loading.." />
          <div className="bottom">
            <h3 className="title">{title}</h3>
            <p className="amount">&#8377;{price}</p>
            <p className="rating">{rating}&nbsp;&#9733;</p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
