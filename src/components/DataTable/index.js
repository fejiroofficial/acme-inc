import React, { useState } from "react";
import Checkbox from "../Checkbox";
import "./DataTable.css";

function DataTable({ columns, rows, onRowClick, onSelectionChange }) {
  // keeps track of selected checkboxes
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  // keeps hold of selected data to return
  const [isSelected, setIsSelected] = useState([]);

  const handleSelectOne = (e, id, photoUrl) => {
    const { checked } = e.target;
    if (checked) {
      setIsCheck([...isCheck, id]);
      setIsSelected([...isSelected, photoUrl]);
      onSelectionChange([...isSelected, photoUrl]);
    } else {
      setIsCheck(isCheck.filter((item) => item !== id));
      setIsSelected(isSelected.filter((item) => item !== photoUrl));
      onSelectionChange(isSelected.filter((item) => item !== photoUrl));
    }
  };

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    if (isCheckAll) {
      setIsCheck([]);
      setIsSelected([])
      onSelectionChange();
    } else {
      onSelectionChange("All");
      setIsCheck(rows.map((li) => li.id));
      setIsSelected(rows.map((li) => li.url));
    }
  };

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
              <Checkbox
                type="checkbox"
                name="selectAll"
                id="selectAll"
                handleClick={handleSelectAll}
                isChecked={isCheckAll}
              />
            </th>
            {columns.map((column) => (
              <th key={column.id} width={column.width}>
                {column.label}
              </th>
            ))}
          </tr>
          {rows.map((row, index) => (
            <tr
              key={`${row.albumId}-{row.id}-${index}`}
              onClick={() => onRowClick(row, row.id)}
            >
              <td className="Check-column" onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  type="checkbox"
                  name={row.title}
                  id={row.id}
                  photo={row.url}
                  handleClick={handleSelectOne}
                  isChecked={isCheck.includes(row.id)}
                />
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
