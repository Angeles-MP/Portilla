import { useState } from 'react'
import './App.css'
import HeaderPagina from './components/HeaderPagina'
import NavPagina from './components/NavPagina'
import MainPagina from './components/MainPagina'
import AsidePagina from './components/AsidePagina'
import FooterPagina from './components/FooterPagina'
import PanelPagina from './components/PanelPagina'

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
      <FooterPagina termino={cierre}/>
      <PanelPagina titulo={"Aviso Académico"}/>
    </>
  )
}

export default App
