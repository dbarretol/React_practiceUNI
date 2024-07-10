import { useEffect, useState } from 'react';
import { ApiWebURL } from "../utils"

function Seleccionados() {
    const [empleadosSeleccionados, setEmpleadosSeleccionados] = useState([]);

    useEffect(() => {
        const seleccionados = JSON.parse(sessionStorage.getItem('empleadosSeleccionados')) || [];
        setEmpleadosSeleccionados(seleccionados);
    }, []);

    const eliminarEmpleado = (idEmpleado) => {
        const nuevosSeleccionados = empleadosSeleccionados.filter(emp => emp.idempleado !== idEmpleado);
        setEmpleadosSeleccionados(nuevosSeleccionados);
        sessionStorage.setItem('empleadosSeleccionados', JSON.stringify(nuevosSeleccionados));
    };

    return (
        <section id='seleccionados' className='padded'>
            <div className="container">
                <h2>Empleados Seleccionados</h2>
                {empleadosSeleccionados.length === 0 ? (
                    <div className="alert alert-warning" role="alert">
                        No hay empleados seleccionados.
                    </div>
                ) : (
                    <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2  g-4">
                        {empleadosSeleccionados.map(emp => (
                            <div className="col" key={emp.idempleado}>
                                <div className="card">
                                    <img src={ApiWebURL + 'fotos/' +emp.foto} className="card-img-top" alt={emp.nombres} />
                                    <div className="card-body">
                                        <h5 className="card-title">{emp.nombres} {emp.apellidos}</h5>
                                        <p className="card-text">{emp.cargo}</p>
                                        <button className="btn btn-danger" onClick={() => eliminarEmpleado(emp.idempleado)}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Seleccionados;
