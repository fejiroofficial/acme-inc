import React from "react";
import Checkbox from "../../Checkbox";

function DataTableItem({
  row,
  onRowClick,
  handleSelectOne,
  isCheck,
  isNumeric,
}) {
  return (
    <tr onClick={() => onRowClick(row, row.id)}>
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
      {Object.keys(row).map((item, index) => (
        <td
          style={{
            textAlign: isNumeric.includes(index) ? "right" : "left",
          }}
          key={`${item}-${index}`}
        >
          {row[item]}
        </td>
      ))}
    </tr>
  );
}

export default DataTableItem;
