import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"
import { Modal } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Proveedores() {
    const [listaProveedores, setListaProveedores] = useState([]);
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "proveedores.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaProveedores(data)
            })
    }

    const mostrarProveedor = (proveedor) => {
        setProveedorSeleccionado(proveedor);
        const modal = new Modal(document.getElementById('proveedorModal'));
        modal.show();
    };

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Empresa</th>
                        <th>Contacto</th>
                        <th>Ciudad</th>
                        <th>País</th>
                        <th>Ver</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProveedores.map(item =>
                        <tr key={item.idproveedor}>
                            <td>{item.idproveedor}</td>
                            <td>{item.nombreempresa}</td>
                            <td>{item.nombrecontacto}</td>
                            <td>{item.ciudad}</td>
                            <td>{item.pais}</td>
                            <td>
                                <i
                                    className="bi bi-eye"
                                    title="Ver"
                                    onClick={() => mostrarProveedor(item)}
                                ></i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const dibujarModal = () => {
        if (!proveedorSeleccionado) return null;

        return (
            <div className="modal fade" id="proveedorModal" tabIndex="-1" aria-labelledby="proveedorModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="proveedorModalLabel">Detalles del Proveedor</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p><strong>Código:</strong> {proveedorSeleccionado.idproveedor}</p>
                            <p><strong>Empresa:</strong> {proveedorSeleccionado.nombreempresa}</p>
                            <p><strong>Contacto:</strong> {proveedorSeleccionado.nombrecontacto}</p>
                            <p><strong>Ciudad:</strong> {proveedorSeleccionado.ciudad}</p>
                            <p><strong>Pais:</strong> {proveedorSeleccionado.pais}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id='proveedores' className='padded'>
            <div className="container">
                <h2>Proveedores</h2>
                {dibujarTabla()}
                {dibujarModal()}
            </div>
        </section>
    )
}

export default Proveedores