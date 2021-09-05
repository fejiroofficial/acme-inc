import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders application", () => {
  const { container } = render(
    <Router>
      <App />
    </Router>
  );
  expect(container).toBeInTheDocument()
});
