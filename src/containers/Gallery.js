import React, { useState } from "react";

// components, containers
import Nav from "../components/Nav";
import Explore from "../components/Explore";

// pexels
import { createClient } from "pexels";
const client = createClient(process.env.REACT_APP_API_KEY);

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [pattern, setPattern] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);

  const fetchHandler = (pageNo) => {
    setIsLoading(true);
    const query = pattern;
    client.photos
      .search({ query, per_page: 60, page: pageNo })
      .then((response) => {
        let returnedPhotos = response.photos;
        console.log(returnedPhotos);
        setPhotos(returnedPhotos);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error from fetching");
        console.log(error);
      });
  };

  return (
    <>
      <Nav></Nav>
      <Explore
        photos={photos}
        setPhotos={setPhotos}
        pattern={pattern}
        setPattern={setPattern}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        fetchHandler={fetchHandler}
        page={page}
        setPage={setPage}
      ></Explore>
    </>
  );
};

export default Gallery;
