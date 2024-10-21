import Table from "../../components/Table";


const Inventory = () => {
  return (
    <div className="container">
        <form>
            <div className="d-flex flex-row mb-3">
                <div className="mb-3 p-2">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre"/>
                </div>
                <div className="mb-3 p-2">
                    <label className="form-label">Precio Unitario</label>
                    <input type="number" className="form-control" id="presio"/>
                </div>
                <div className="mb-3 p-2">
                    <label className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad"/>
                </div>
                <button type="submit" className="btn btn-primary p-2 btn_add">Agregar</button>
            </div>
        </form>
         <Table columns={["Codigo","Nombre","Precio","Stok"]} data={[]} className='table table-bordered' styles={{}}/>
    </div>
  )
}

export default Inventory