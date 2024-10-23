/**
 * Componente de barra de navegación.
 * Este componente utiliza Bootstrap para crear una barra de navegación responsiva
 * que permite la navegación entre diferentes secciones de la aplicación.
 * 
 * @returns {JSX.Element} El componente de navegación renderizado.
 * 
 */
const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Ventas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/recharge">Recargas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/inventory">Inventario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/discounts">Descuentos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
