import React, { useEffect, useState, useRef, useCallback } from "react";
import DataTable from "../../components/DataTable";
import axios from "axios";
import "./Home.css";

function Home(props) {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  // this is a loader reference
  const loader = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=30`
        );
        if (status === 200) {
          setPhotos((photos) => [...photos, ...data]);
        }
      } catch (error) {
        console.log("Data failed to fetch");
      }
    };
    fetchData();
  }, [page]);

  const intersectionRef = useCallback((node) => {
    if (loader.current) loader.current.disconnect();
    loader.current = new IntersectionObserver(observerHandler);
    if (node) loader.current.observe(node);
  }, []);

  const observerHandler = async (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };
  const onRowClick = (rowData, rowIndex) => {
    console.log("data event gotten from click", rowIndex, rowData);
  };
  const onSelectionChange = (selected) => {
    console.log("data event gotten from checkbox", selected);
  };
  return (
    <div className="Home">
      {photos.length ? (
        <>
          <DataTable
            columns={[
              {
                id: "album",
                label: "AlbumId",
                numeric: false,
                width: "200px",
              },
              {
                id: "id",
                label: "Id",
                numeric: false,
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
            ]}
            rows={photos}
            onRowClick={onRowClick}
            onSelectionChange={onSelectionChange}
          />
          <div className="Loading" ref={intersectionRef}>
            ...loading
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
