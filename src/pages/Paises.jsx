import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";

function Paises() {
    const [listaPaises, setListaPaises] = useState([]);

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "paises.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListaPaises(data);
            });
    };

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Código</th>
                        <th>País</th>
                        <th>Capital</th>
                        <th>Área</th>
                        <th>Población</th>
                        <th>Continente</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPaises.map(item => (
                        <tr key={item.idpais}>
                            <td>{item.idpais}</td>
                            <td>{item.codpais}</td>
                            <td>{item.pais}</td>
                            <td>{item.capital}</td>
                            <td>{item.area}</td>
                            <td>{item.poblacion}</td>
                            <td>{item.continente}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <section className='padded'>
            <div className="container">
                <h2>Lista de Países</h2>
                {dibujarTabla()}
            </div>
        </section>
    );
}

export default Paises;