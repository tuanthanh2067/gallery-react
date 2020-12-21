import React, { useState } from "react";

// components, containers
import Nav from "../components/Nav";
import Explore from "../components/Explore";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [pattern, setPattern] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      ></Explore>
    </>
  );
};

export default Gallery;
