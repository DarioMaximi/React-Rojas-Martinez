import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, cartTotal, removeItem, clear, sumaTotal} = useContext(CartContext);
    console.log (cart);

    if (cartTotal() === 0){
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos para comprar!!</div>
                        <Link to={"/"} className="btn btn-warning" >Volver a la página pricipal</Link>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-warning">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio $</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={120}/> </td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.precio}</td>
                                    <td className="align-middle text-end"><Link onClick={() => {removeItem(item.id)}}><img src={"/images/trash3.svg"} alt={"Eliminar"} width={25}/></Link> </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total a Pagar</b></td>
                                <td><b>${sumaTotal()}</b></td>
                                <td className="text-end"><button className="btn btn-warning">Finalizar Compra</button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;