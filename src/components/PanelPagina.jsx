function PanelPagina(props) {
    console.log(props)
  return (
    <>
    <section className="curso">
      <h2>{props.titulo}</h2>
      <div>{props.children}</div>
    </section>

    </>
  )
}

export default PanelPagina