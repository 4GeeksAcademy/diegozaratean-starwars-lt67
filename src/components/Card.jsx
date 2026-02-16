import React from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Modelo: {props.model},  Manufacturer: {props.nave.manufacturer}</p>
                <Link to={"/nave/" + props.uid } className="btn btn-primary">Go somewhere {props.uid}</Link>
            </div>
        </div>
    )
}

export default Card