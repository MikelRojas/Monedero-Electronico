import QRCode from 'react-qr-code';
import { QrProps } from '../Types/type';

/**
 * Componente para generar un código QR.
 * Este componente utiliza la biblioteca 'react-qr-code' para crear un código QR
 * a partir de una URL proporcionada a través de las props.
 * 
 * @param {QrProps} props - Propiedades del componente.
 * @param {string} props.url - La URL que se codificará en el código QR.
 * @returns {JSX.Element} El código QR renderizado.
 * 
 */

const Qr = ({ url }: QrProps) => {
  return (
    <div className="qrcode__container img_qr">
      <div className="qrcode__image">
        <QRCode value={url} size={200} />
      </div>
    </div>
  );
};

export default Qr;
