import React, { useState } from "react";
import ShowContent from "./ShowContent";
import Error from "./Error";
import uuid from "uuid/v4";

const CreateContent = () => {
  const [information, setInformation] = useState({
    text: "",
  });

  // postea el publicacion
  const [stateContent, setStateContent] = useState(false);

  // array del historial de publicaciones
  const [historyContent, setHistoryContent] = useState([]);

  // manejo de error
  const [error, setError] = useState(false);

  const setState = (event) => {
    setInformation({
      ...information,
      [event.target.name]: event.target.value,
      id: uuid(),
      likes: Math.ceil(Math.random() * 100),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (information.text.trim() === "") {
      setError(true);
    } else {
      setHistoryContent([...historyContent, information]);
      setStateContent(true);
      setError(false);
      // resetear formulario
      setInformation({
        text: "",
      });
    }
  };

  return (
    <div>
      {error ? <Error message="Ingresar Busqueda" /> : null}
      <form onSubmit={handleSubmit} className="text-center">
        <label className="mr-2 mt-4"> Descripcion: </label>
        <input
          type="text"
          placeholder="Ingrese Contenido"
          onChange={setState}
          name="text"
          value={information.text}
        />
        <input
          type="submit"
          className="ml-3 mb-3 btn btn-outline-success"
          value="Publicar"
        />
        {stateContent ? <ShowContent data={historyContent} /> : null}
      </form>
    </div>
  );
};

export default CreateContent;
