import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const incrementarStock = () => {
        if (counter < itemStock){
        setCounter (counter + 1);
        }
    }

    const decrementarStock = () =>{
        if (counter > 1) {
            setCounter(counter - 1)
        }

    }

    const addToCart = (quantity) => {
        if (counter <= itemStock) {
            setCounter(1);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return(
        <div className="row">
            <div className="col-md-12">
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default" onClick={decrementarStock}>-</button>
                    <button type="button" className="btn btn-default">{counter}</button>
                    <button type="button" className="btn btn-default" onClick={incrementarStock}>+</button>
                </div>
                {vendido ? <Link to={"/cart"} className="btn btn-default">Terminar mi compra</Link> : <button type="button" className="btn btn-default" onClick={ () => { addToCart(counter) } }>Agregar al carrito</button> }
            </div>
        </div>
    )
}

export default ItemCount;