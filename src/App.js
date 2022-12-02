import React, { useState } from "react";
import dataJSON from "./components/json/json.json";
import Table from "./components/Table/Table";

function App() {
  const [data, setData] = useState(dataJSON);
  const [changeTable, setChangeTable] = useState(1);
  const copyJSON = JSON.parse(JSON.stringify(dataJSON));

  const selectGroup = (value) => {
    switch (value) {
      case "1":
        setData(dataJSON);
        setChangeTable(1);
        break;
      case "2":
        groupingProject();
        setChangeTable(2);
        break;
      case "3":
        groupingProjectAndEmployee();
        setChangeTable(3);
        break;
      case "4":
        break;
      default:
        break;
    }
  };

  const groupingProject = () => {
    let arr = [];
    for (let i = 0; i < copyJSON.length; i++) {
      // Se arr ha la lunghezza 0 (ovvero non ha nessun elemento all'interno), allora Il primo oggetto lo pushi in arr
      if (arr.length === 0) arr.push(copyJSON[i]);
      else {
        // Altrimenti cercami il valore in arr che è uguale al valore dell'elemento in questo momento nel for
        const findObj = arr.find(
          (el) => el.project.name === copyJSON[i].project.name
        );
        // Se il nome del progetto trovato con il find è uguale al nome del progetto in copyJSON
        if (findObj?.project.name === copyJSON[i].project.name) {
          // Trovami l'index dell'oggetto
          let index = arr.findIndex(
            (el) => el.project.name === copyJSON[i].project.name
          );
          // Addiziona le ore precedenti con quelle nuove
          arr[index].hours += copyJSON[i].hours;
          // Altrimenti pushami il nuovo oggetto (ovvero il nuovo progetto che attualmente non c'è nell'array "arr")
        } else arr.push(copyJSON[i]);
      }
    }
    // Inserisci l'array nello state data
    setData(arr);
  };

  const groupingProjectAndEmployee = () => {
    let arr = [];
    for (let i = 0; i < copyJSON.length; i++) {
      if (arr.length === 0) arr.push(copyJSON[i]);
      else {
        const findObj = arr.find(
          (el) => el.project.name === copyJSON[i].project.name
        );
        if (
          findObj?.project.name === copyJSON[i].project.name &&
          findObj?.employee.name === copyJSON[i].employee.name
        ) {
          let index = arr.findIndex(
            (el) => el.project.name === copyJSON[i].project.name
          );
          arr[index].hours += copyJSON[i].hours;
        } else arr.push(copyJSON[i]);
      }
    }
    // Ordine alfabetico - nome del progetto (trovato sul web)
    arr.sort((a, b) => {
      if (a.project.name > b.project.name) return -1;
      else return 1;
    });
    setData(arr);
  };

  return (
    <>
      <div>
        <select
          className="form-select w-25 m-4 shadow-sm text-truncate"
          defaultValue={"1"}
          onChange={(e) => selectGroup(e.target.value)}
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
