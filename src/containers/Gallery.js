import React, { useState } from "react";

// components, containers
import Explore from "../components/Explore";

// pexels
import { createClient } from "pexels";
const client = createClient(process.env.REACT_APP_API_KEY);

const Gallery = ({ themeToggler }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHandler = (pageNo, query) => {
    setIsLoading(true);
    client.photos
      .search({ query, per_page: 40, page: pageNo })
      .then((response) => {
        let returnedPhotos = response.photos;
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
      <Explore
        photos={photos}
        setPhotos={setPhotos}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        fetchHandler={fetchHandler}
        themeToggler={themeToggler}
      ></Explore>
    </>
  );
};

export default Gallery;
