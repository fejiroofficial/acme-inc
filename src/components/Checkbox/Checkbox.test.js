import { render, fireEvent } from "@testing-library/react";
import Checkbox from ".";

test("checks and sends change event", () => {
  const handleClick = jest.fn();
  const { container } = render(
    <Checkbox type="checkbox" handleClick={handleClick}/>
  );
  const checkbox = container.firstChild;
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
