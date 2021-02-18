import React, { useState } from "react";
import Form from "./components/Form";
import Pixabay from "./components/Pixabay";

function App() {
  const [status, setStatus] = useState(false);

  return <div>{status ? <Pixabay /> : <Form setStatus={setStatus} />}</div>;
}

export default App;
