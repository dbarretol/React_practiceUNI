import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiWebURL } from "../utils";
import "./PedidoDetalle.css"

function PedidoDetalle() {
    const { idpedido } = useParams();
    const [detalles, setDetalles] = useState([]);

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio = `${ApiWebURL}pedidosdetalle.php?idpedido=${idpedido}`;
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDetalles(data);
            });
    };

    const dibujarDetalles = () => {
        return detalles.map(item => (
            <div className="card" key={item.nombre}>
                <img src={ApiWebURL+item.imagenchica} className="card-img-top" alt={item.nombre} style={{ width: '100px', height: '100px' }}/>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Cantidad: {item.cantidad}</p>
                    <p className="card-text">Precio: {item.precio}</p>
                </div>
            </div>
        ));
    };

    return (
        <section id='pedido-detalle' className='padded'>
            <div className="container">
                <h2>Detalles del Pedido {idpedido}</h2>
                <div className="card-grid">
                    {dibujarDetalles()}
                </div>
            </div>
        </section>
    );
}

export default PedidoDetalle;