
const Recharge = () => {
  return (
    <div className='container'>
        <div className="d-flex flex-row mb-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">ID cliente</label>
                    <input type="number" className="form-control input_form" id="id_client"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Monto</label>
                    <input type="number" className="form-control input_form" id="id_monto"/>
                </div>
                <button type="submit" className="btn btn-primary">Solicitar QR</button>
            </form>
            <img src="/public/images/qr_default.png" className="img-fluid img_qr" alt="Your Qr"></img>
        </div>
    </div>
  )
}

export default Recharge