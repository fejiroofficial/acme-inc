import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer, { act } from "react-test-renderer";
import axios from "axios";

import Home from ".";

test("displays rows and columns", () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});

test("should fetch data from api", async () => {
  const dummyData = {
    data: [],
    status: 200,
  };
  const axiosGetSpy = jest.spyOn(axios, "get").mockResolvedValueOnce(dummyData);
  await act(async () => {
    renderer.create(<Home />);
  });
  expect(axiosGetSpy).toBeCalledWith(
    "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=30"
  );
  axiosGetSpy.mockRestore();
});

test("should not fetch data from api", async () => {
  const dummyData = {
    data: [],
    status: 400,
  };
  const axiosGetSpy = jest.spyOn(axios, "get").mockRejectedValueOnce(dummyData);
  await act(async () => {
    render(<Home />);
  })
  expect(screen.queryByText('...loading')).toBeNull()
  axiosGetSpy.mockRestore();
});
