import React, { useState } from "react";
import dataJson from "./components/json/json.json";
import Table from "./components/Table/Table";

function App() {
  const [data, setData] = useState(dataJson);
  const [changeTable, setChangeTable] = useState(false);

  const selectGroup = (value) => {
    switch (value) {
      case "1":
        setData(dataJson);
        setChangeTable(false);
        break;
      case "2":
        groupingProject();
        break;
      default:
        break;
    }
  };

  const groupingProject = () => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (arr.length === 0) {
        arr.push({
          name: data[i].project.name,
          hours: data[i].hours,
        });
      } else {
        const findObj = arr.find((el) => el.name === data[i].project.name);
        if (findObj?.name === data[i].project.name) {
          let index = arr.findIndex((el) => el.name === data[i].project.name);
          arr[index].hours += data[i].hours;
        } else {
          arr.push({
            name: data[i].project.name,
            hours: data[i].hours,
          });
        }
      }
    }
    setChangeTable(true);
    setData(arr);
  };

  return (
    <>
      <div>
        <select
          className="form-select w-25 m-4 shadow-sm"
          defaultValue={"1"}
          onChange={(event) => selectGroup(event.target.value)}
        >
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
        <Table data={data} changeTable={changeTable} />
      </div>
    </>
  );
}

export default App;
