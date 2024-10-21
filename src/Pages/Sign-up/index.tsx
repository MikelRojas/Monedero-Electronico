

const Sign_up = () => {
  return (
    <div className="continer">
      <form>
      <div className="mb-3">
          <label className="form-label">Nombre Nodo</label>
          <input type="text" className="form-control" id="id_email" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="id_password"/>
        </div>
        <p><a href="/" className="link-offset-1">Si ya tienes un nodo toca aqui!</a></p>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Sign_up