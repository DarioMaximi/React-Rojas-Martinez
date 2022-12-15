import React, { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);

    const incrementarStock = () => {
        if (counter < stock){
        setCounter (counter + 1);
        }
    }

    const decrementarStock = () =>{
        if (counter > 1) {
            setCounter(counter - 1)
        }

    }

    const onAdd = () => {
        if (stock > 0) {
        console.log("Agregaste: " + counter + " Productos al Carrito")
        }
    }

    return(
        <div className="row">
            <div className="col-md-12">
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default" onClick={decrementarStock}>-</button>
                    <button type="button" className="btn btn-default">{counter}</button>
                    <button type="button" className="btn btn-default" onClick={incrementarStock}>+</button>
                </div>
                <button type="button" className="btn btn-default" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;