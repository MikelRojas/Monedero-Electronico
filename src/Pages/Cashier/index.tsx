

const Cashier = () => {
  return (
    <div className='container'>
        
        <form>
            <div className="d-flex flex-row mb-3">
                <div className="mb-3 p-2">
                    <label className="form-label">Codigo de producto</label>
                    <input type="number" className="form-control" id="cod_producto"/>
                </div>
                <div className="mb-3 p-2">
                    <label className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad"/>
                </div>
                <button type="submit" className="btn btn-primary p-2 btn_add">Agregar</button>
            </div>
        </form>
        <div className="d-flex flex-row mb-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
            </table>
            <img src="/public/images/qr_default.png" className="img-fluid img_qr" alt="Your Qr"></img>
        </div>
        <form>
            <div className="d-flex flex-row mb-3">
                <div className="mb-3">
                    <label className="form-label">ID cliente</label>
                    <input type="number" className="form-control" id="id_client"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Solicitar QR</button>
        </form>
        
    </div>
    
  )
}

export default Cashier
