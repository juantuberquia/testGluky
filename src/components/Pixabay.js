import React, { useState } from "react";
import CreateContent from "./CreateContent";
import Imgs from "./Imgs";

const Pixabay = ({ data }) => {
  const [create, setCreate] = useState(false);

  const handleClick = () => {
    setCreate(true);
  };

  return (
    <div>
      <div className="content mx-auto mt-3 card">
        {create ? <CreateContent /> : null}
        {data.map((photo) => (
          <Imgs
            id={photo.id}
            url={photo.largeImageURL}
            text={photo.tags}
            likes={photo.likes}
          />
        ))}
        <button onClick={handleClick} className="fixed btn btn-outline-primary">
          Crear
        </button>
      </div>
    </div>
  );
};

// btn btn-primary btn-lg

export default Pixabay;
