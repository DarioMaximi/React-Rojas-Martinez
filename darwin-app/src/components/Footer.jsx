import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Todos los derechos reservados</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <a href="https://www.instagram.com/vanibrand" target="_blank" className="mx-3"><img src="images/logoIG.png" alt="logo insta" width={30}></img></a>
                        <a href="https://wa.link/b8mjia" target="_blank"><img src="images/logoWP.png" alt="logo whatsapp" width={30}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer