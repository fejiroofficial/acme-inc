import React from "react";
import "./DataTable.css";

function DataTable({ columns, rows }) {
  return (
    <div className="Table">
      <ul className="Table-nav" id="pills-tab" role="tablist">
        <li>
          <a className="Nav-link active" href="author-list.html">
            All
          </a>
        </li>
      </ul>
      <table>
        <tbody>
          <tr>
            <th className="Check-column">
              <input type="checkbox" />
            </th>
            {columns.map((column) => (
              <th key={column.id} width={column.width}>
                {column.label}
              </th>
            ))}
          </tr>
          {rows.map((row, index) => (
            <tr id={row.id} key={`${row.albumId}-{row.id}-${index}`}>
              <td className="Check-column">
                <input type="checkbox" />
              </td>
              {Object.keys(row).map(
                (item, index) =>
                  item !== "id" && <td key={`${item}-${index}`}>{row[item]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
