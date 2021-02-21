import React from "react";
import Imgs from "./Imgs";

const ShowContent = ({ data }) => {
  return (
    <div>
      {data.map((publication) => (
        <Imgs
          id={publication.id}
          url={""}
          text={publication.text}
          likes={publication.likes}
        />
      ))}
    </div>
  );
};

export default ShowContent;
