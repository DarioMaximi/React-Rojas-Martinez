import React from "react";

const Promocion = () => {
    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded">
                    <p><img src="images/baseDeDatos.png" alt="Base de Datos" className="img-fluid" width={400} /></p>
                    <p>La mejor base de datos de tu vida, para crear campañas de E-mail marketing</p>
                    <p><button className="btn btn-warning">Comprar</button> </p>
                </div>
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded">
                    <p><img src="images/llevatunegocio.png" alt="Lleva tu negocio" className="img-fluid" width={400} /></p>
                    <p>Si te quedaste afuera del curso que hicieron más de 100 personas en Octubre. Esta es tú oportunidad.</p>
                    <p><button className="btn btn-warning">Comprar</button> </p>
                </div>
            </div>
            <div className="row gx-5">
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded">
                    <p><img src="images/empAempresaria.png" alt="Base de Datos" className="img-fluid" width={400} /></p>
                    <p>Subi de nivel con este curso virtual de 8 clases</p>
                    <p><button className="btn btn-warning">Comprar</button> </p>
                </div>
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded">
                    <p><img src="images/empEmpresaria1.png" alt="Lleva tu negocio" className="img-fluid" width={400} /></p>
                    <p>Segui capacitandote y descubrí nuevas herramientas para ser una empresaria exitosa</p>
                    <p><button className="btn btn-warning">Comprar</button> </p>
                </div>
            </div>
        </div>
    )
}

export default Promocion