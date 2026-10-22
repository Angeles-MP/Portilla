function HeaderPagina(props) {
    console.log(props)

  return (
    <>
    <header>
        <h1>{props.cabe[0].titulo}</h1>
        <p>{props.cabe[1].institucion}</p>
    </header>
    </>
  )
}

export default HeaderPagina
