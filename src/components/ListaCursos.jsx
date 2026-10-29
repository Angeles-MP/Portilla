import {useState} from 'react'
 export const cursos = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'JavaScript' },
    { id: 3, nombre: 'Bases de datos' },
    { id: 4, nombre: 'Bases de datos2' }
];

function ListaCursos() {
    return (
        <ul>
            {cursos.map((curso) => ( //map transforma
            <li key={curso.id}>{curso.nombre}</li> //key sirve para identificar a cada uno de los elementos
            ))}
        </ul>
    );
}
export default ListaCursos