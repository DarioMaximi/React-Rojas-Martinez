import React from "react";
import {Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <nav className ="navbar navbar-expand-lg">
                        <div className ="container-fluid">
                            <Link className ="navbar-brand" to={"/"}><img src="/images/logo.png" alt="Logo" width={50}></img></Link>
                            <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className ="navbar-toggler-icon"></span>
                            </button>
                                <div className ="collapse navbar-collapse" id="navbarNav">
                                    <ul className ="navbar-nav">
                                        <li className ="nav-item">
                                            <NavLink className ="nav-link active" activeclassname="page" to={"category/archivos"}>Archivos</NavLink>
                                        </li>
                                        <li className ="nav-item">
                                            <NavLink className ="nav-link active" activeclassname="page" to={"category/cursos"}>Cursos</NavLink>
                                        </li>
                                        <li className ="nav-item">
                                            <NavLink className ="nav-link active" activeclassname="page" to={"category/almaLider"}>Alma Lider</NavLink>
                                        </li>
                                        <li className ="nav-item">
                                            <NavLink className ="nav-link active"  activeclassname="page" to={"category/escuela"}>Escuela</NavLink>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
        )

}

export default NavBar