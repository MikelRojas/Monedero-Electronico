import React from 'react'

export const Cashier = () => {
  return (
    <div className='container'>
        <form>
            <div className="mb-3">
                <label className="form-label">Codigo de producto</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Cantidad</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
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
    </div>
    
  )
}
