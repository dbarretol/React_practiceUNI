import Envios from "../home/Envios"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Noticias from "../home/Noticias"

function Inicio() {
    return (
        <>
            <MainBanner/>
            <Nosotros/>
            <Noticias/>
            <Envios/>
        </>
    )
}

export default Inicio