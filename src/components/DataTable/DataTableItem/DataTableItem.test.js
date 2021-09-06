import { render, fireEvent } from "@testing-library/react";
import DataTableItem from ".";

const row = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
};

const isCheck = [];
const isNumeric = []
test("checks and sends change event", () => {
  const onRowClick = jest.fn();
  const tbody = document.createElement("tbody");
  const { container } = render(
    <DataTableItem row={row} isCheck={isCheck} onRowClick={onRowClick} isNumeric={isNumeric} />,
    {
      container: document.body.appendChild(tbody),
    }
  );
  const cell = container.querySelector(".Check-column");
  fireEvent.click(cell);
  const tableRow = container.firstChild;
  fireEvent.click(tableRow);
  expect(onRowClick).toHaveBeenCalledTimes(1);
});
