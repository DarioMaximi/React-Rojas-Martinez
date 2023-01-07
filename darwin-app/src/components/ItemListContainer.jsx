import React, { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        }, [id])
    });


    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer