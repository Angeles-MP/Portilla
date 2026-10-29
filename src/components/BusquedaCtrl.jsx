import {useState} from 'react'

//Creo la función y recibo cursos como prop
function BusquedaCtrl({ cursos = [] }) { 
    const [busqueda, setBusqueda] = useState('');
    
    const cursosFiltrados = cursos.filter((curso) =>
        curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            <section className='curso'>
                <label htmlFor="buscar">Buscar curso:</label>
                <input
                    id="buscar"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                {cursosFiltrados.length > 0 ? (
                    cursosFiltrados.map((curso) => (
                        <p key={curso.id}>{curso.nombre}</p>
                    ))
                ) : (
                    <p>No se encontraron cursos.</p>
                )}
            </section>
        </>
    )
}

export default BusquedaCtrl;

