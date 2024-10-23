import { TableProps } from '../Types/type';

/**
 * Componente para renderizar una tabla.
 * Este componente acepta columnas y datos para construir una tabla dinámica.
 * 
 * @param {TableProps} props - Propiedades del componente.
 * @param {Array<string>} props.columns - Array de nombres de columnas a mostrar en la tabla.
 * @param {string} [props.className] - Clase CSS opcional para aplicar a la tabla.
 * @param {Array<Array<any>>} [props.data] - Datos a mostrar en la tabla, como un array de arrays.
 * @param {Object} [props.styles] - Estilos en línea opcionales para la tabla.
 * @returns {JSX.Element} La tabla renderizada.
 * 
 * @example
 * <Table 
 *   columns={['Nombre', 'Edad', 'Ciudad']} 
 *   data={[['Juan', 30, 'Madrid'], ['Ana', 25, 'Barcelona']]} 
 *   className="my-table" 
 *   styles={{ border: '1px solid black' }} 
 * />
 */
const Table = ({ columns, className: className, data = [], styles = {} }: TableProps) => {
  return (
    <>
      <table className={className} style={styles}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th scope="col" key={index}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
