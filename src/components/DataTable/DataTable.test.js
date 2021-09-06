import { render, getBy } from "@testing-library/react";
import DataTable from ".";

const columns = [
  {
    id: "album",
    label: "AlbumId",
    numeric: true,
    width: "200px",
  },
  {
    id: "title",
    label: "Title",
    numeric: false,
    width: "900px",
  },
  {
    id: "url",
    label: "Url",
    numeric: false,
    width: "900px",
  },
  {
    id: "thumbnail",
    label: "Thumbnail",
    numeric: false,
    width: "900px",
  },
];

const rows = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];

test("displays rows and columns", () => {
  const { container } = render(<DataTable columns={columns} rows={rows} />);
  expect(container).toBeInTheDocument()
});
