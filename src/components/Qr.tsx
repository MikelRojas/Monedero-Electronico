import QRCode from 'react-qr-code';
import { QrProps } from '../Types/type';

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
