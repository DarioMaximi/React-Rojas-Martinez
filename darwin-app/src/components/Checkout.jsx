import { addDoc, doc, collection, getFirestore, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, sumaTotal, clear} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer:{name:nombre, phone:telefono, email:email},
            items: cart.map(item => ({id:item.id, title:item.nombre, quantity:item.quantity, price:item.precio, priceTotal:item.quantity * item.precio})),
            total:sumaTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc (orderCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const generateOrder = doc(db, "orders", snapShot.id);
            updateDoc(generateOrder, {total:order.total * 1.21});
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="telefono" className="form-label">Telefono:</label>
                        <input type="text" className="form-control" placeholder="Ingrese su número telefónico" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn btn-warning" onClick={generarOrden}>Hacer el pedido</button>
                </form>
            </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={120}/> </td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.precio}</td>
                                </tr>
                                ))}
                                <tr>
                                    <td colSpan={3} className="text-end"><b>Total a Pagar</b></td>
                                    <td><b>${sumaTotal()}</b></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-warning" role="alert">El código de la orden es: <b>{orderId}</b></div>: ""}
                </div>
            </div>
        </div>
    )}

export default Checkout;