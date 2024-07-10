import Envios from "../home/Envios"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Noticias from "../home/Noticias"
import Testimonios from "../home/Testimonios"

function Inicio() {
    return (
        <>
            <MainBanner/>
            <Nosotros/>
            <Noticias/>
            <Envios/>
            <Testimonios />
        </>
    )
}

export default Inicio