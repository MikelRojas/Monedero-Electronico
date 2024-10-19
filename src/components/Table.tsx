import { TableProps } from '../Types/type';

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
