import React from "react";
import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (
        <div className="col-md-3">
            <Link to={"/item/" + item.id} className="text-dark text decoration-none">
                <div className="card text-center">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                        <div className="card-body">
                            <p className="card-text">{item.nombre}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item