import { useState } from "react";
import Folder from "./components/Folder";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "Root",
    type: "folder",
    children: [],
  });

  return (
    <div className="app">
      <h1>📁 Folder Architect</h1>
      <Folder node={data} setData={setData} />
    </div>
  );
}

export default App;