import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";

function Paises() {
    const [listaPaises, setListaPaises] = useState([]);
    const [codpais, setCodpais] = useState("");
    const [pais, setPais] = useState("");
    const [capital, setCapital] = useState("");
    const [area, setArea] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [continente, setContinente] = useState("");

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "paises.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                setListaPaises(data);
            });
    };

    const agregarPais = (event) => {
        event.preventDefault();
        const rutaServicio = ApiWebURL + "paisesinsert.php";

        let formData = new FormData();
        formData.append("codpais", codpais);
        formData.append("pais", pais);
        formData.append("capital", capital);
        formData.append("area", area);
        formData.append("poblacion", poblacion);
        formData.append("continente", continente);

        fetch(rutaServicio, {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                leerServicio(); // Refresh the country list
                setCodpais("");
                setPais("");
                setCapital("");
                setArea("");
                setPoblacion("");
                setContinente("");
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
                <h2>Agregar Nuevo País</h2>
                <form onSubmit={agregarPais}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Código" value={codpais} onChange={(e) => setCodpais(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="País" value={pais} onChange={(e) => setPais(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Capital" value={capital} onChange={(e) => setCapital(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Área" value={area} onChange={(e) => setArea(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Población" value={poblacion} onChange={(e) => setPoblacion(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Continente" value={continente} onChange={(e) => setContinente(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Agregar País</button>
                </form>
            </div>
        </section>
    );
}

export default Paises;