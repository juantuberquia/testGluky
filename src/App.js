import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Pixabay from "./components/Pixabay";

function App() {
  const [stateGetData, setStateGetData] = useState(false);
  const [uploadContent, setUploadContent] = useState(false);

  const [data, setData] = useState([]);

  let words = ["batman", "oso", "flash", "motos", "carros"];
  let random = Math.floor(Math.random() * (4 - 0)) + 0;
  let search = words[random];

  useEffect(() => {
    if (stateGetData === true) {
      const getData = async () => {
        const key = "14166181-a93322c4f13390a817f56b032";
        const response = await fetch(
          `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${50}`
        );
        let res = await response.json();
        setData(res.hits);
        console.log(res.hits);
      };
      getData();
    }
    setStateGetData(false);
  }, [stateGetData, search]);

  return (
    <div>
      {uploadContent ? (
        <Pixabay data={data} />
      ) : (
        <Form
          setStateGetData={setStateGetData}
          setUploadContent={setUploadContent}
        />
      )}
    </div>
  );
}

export default App;
