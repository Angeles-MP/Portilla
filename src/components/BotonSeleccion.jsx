import { useState, useEffect } from "react";

function BotonSeleccion({ onSeleccionar, onSeleccionar2 }) {
    return (
        <>
        <section>
            <button onClick={onSeleccionar}>
            Seleccionar curso
            </button>
            {/* Este botón ejecuta correctamente onSeleccionar2 */}
            <button onClick={onSeleccionar2}>
            Seleccionar otro
            </button>
        </section>
        </>
    );
}

function CursoApp() {
    const [curso, setCurso] = useState('Ninguno');
    const [cambio, setCambio] = useState(false); 
    const [hora, setHora] = useState(''); 

    useEffect(() => {
        document.title = curso;
    }, [cambio]); 

    return (
        <section className="curso">
            <h2>Hora Actual</h2>
            {hora && <p>La hora es: {hora}</p>}
            <p>Curso elegido: {curso}</p>
            
            <BotonSeleccion
                onSeleccionar={() => setCurso('React')}
                onSeleccionar2={() => setCurso('DWFE')} 
            />
            
            <button onClick={() => { setCambio(!cambio) }}>Cambiar</button>
            <button onClick={() => { setHora(new Date().toLocaleTimeString('es-PE')) }}>
                Mostrar Hora
            </button>
        </section>
    );
}

export default CursoApp;

