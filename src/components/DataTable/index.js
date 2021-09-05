import React, { useState } from "react";
import Checkbox from "../Checkbox";
import DataTableItem from "./DataTableItem";
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
      setIsSelected([]);
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
                className="XXX"
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
            <DataTableItem
              key={`${row.albumId}-{row.id}-${index}`}
              row={row}
              onRowClick={onRowClick}
              handleSelectOne={handleSelectOne}
              isCheck={isCheck}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
