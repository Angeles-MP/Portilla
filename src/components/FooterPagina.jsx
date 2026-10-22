function FooterPagina(props) {

    console.log(props)

  return (
    <>
    <footer id="contacto">
        <p>{props.termino[0].anio}</p>
        <p>{props.termino[1].programa}</p>
        <p>Todos los derechos reservados.</p>
  </footer>
    </>
  )
}

export default FooterPagina