import { useState } from 'react'
import './App.css'
import HeaderPagina from './components/HeaderPagina'
import NavPagina from './components/NavPagina'
import MainPagina from './components/MainPagina'
import AsidePagina from './components/AsidePagina'
import FooterPagina from './components/FooterPagina'
import PanelPagina from './components/PanelPagina'
import ListaCursos, {cursos} from './components/ListaCursos'
import BusquedaCtrl from './components/BusquedaCtrl'
import CursoApp from './components/BotonSeleccion'

function App() {
  const [count, setCount] = useState(0)

  const cabecera=[
    {titulo:"Portal Académico"},
    {institucion:"IESP TRUJILLO"}
  ]

  const cierre=[
    {anio:"2026"},
    {programa:"Diseño y Programación Web"}
  ]

  return (
    <>
      <HeaderPagina cabe={cabecera}/>
      <NavPagina/>
      <MainPagina/>
      <AsidePagina/>
      <PanelPagina titulo={"Aviso Académico"}>
        <ul>
          <li>Taller de React</li>
          <li>Presentación de proyectos</li>
        </ul>
      </PanelPagina>
      <CursoApp/>
      <ListaCursos/>
      <BusquedaCtrl cursos={cursos}/>
      <FooterPagina termino={cierre}/>
    </>
  )
}

export default App
