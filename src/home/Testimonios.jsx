import React from 'react';

function Testimonios() {
    // Testimonios ficticios
    const testimonios = [
        {
            id: 1,
            nombre: 'María Sánchez',
            texto: '¡Increíble variedad de regalos! Encontré el regalo perfecto para mi mejor amiga y quedé encantada con la calidad y el servicio.',
            ciudad: 'Madrid, España'
        },
        {
            id: 2,
            nombre: 'Juan Pérez',
            texto: 'Me sorprendieron gratamente los regalos corporativos personalizados que compré para mi equipo. Todos quedaron impresionados.',
            ciudad: 'Buenos Aires, Argentina'
        },
        {
            id: 3,
            nombre: 'Ana Oliveira',
            texto: 'Los regalos temáticos son geniales. Compré accesorios para parrillas para mi esposo y fue un éxito total en su cumpleaños.',
            ciudad: 'São Paulo, Brasil'
        }
    ];

    return (
        <section id="testimonios" className="padded">
            <div className="container">
                <h2>Testimonios</h2>
                <p>Conoce lo que opinan nuestros clientes.</p>

                <div className="row">
                    {testimonios.map(testimonio => (
                        <article className="col" key={testimonio.id}>
                            <p><strong>{testimonio.nombre} </strong></p>
                            <em><strong>{testimonio.ciudad}</strong></em>
                            <p>{testimonio.texto}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonios;