import { render } from "@testing-library/react";
import Home from ".";

test("displays rows and columns", () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});
