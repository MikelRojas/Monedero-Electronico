
/**
 * Propiedades para el componente de tabla.
 */
export declare interface TableProps{
    columns:string[];
    className:string;
    data:Array<Array<number|string>>|[];
    styles: React.CSSProperties;
}

/**
 * Propiedades para el componente de código QR.
 */
export declare interface QrProps {
    url: string; 
}
  