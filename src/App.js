import React, { useState } from "react";
import dataJson from "./components/json/json.json";
import Table from "./components/Table/Table";

function App() {
  const [data, setData] = useState(dataJson);
  return (
    <>
      <div>
        <select className="form-select w-25 m-4 shadow-sm" defaultValue={"1"}>
          <option value="1">Senza aggregazioni</option>
          <option value="2">Raggruppamento per progetto</option>
          <option value="3">
            Raggruppamento per progetto prima e per impiegato dopo
          </option>
          <option value="4">
            Raggruppamento per impiegato prima e per data dopo
          </option>
        </select>
      </div>
      <div className="mx-4 shadow-sm border border-dark">
        <Table data={data} />
      </div>
    </>
  );
}

export default App;
