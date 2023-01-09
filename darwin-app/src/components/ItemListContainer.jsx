import React, { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    /*useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        }, [id])
    });*/

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "cursos");
        const q = id ? query(itemCollection, where("categoria", "==", id)) : itemCollection;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
        })
    })


    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer