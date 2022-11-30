import moment from "moment/moment";
import React from "react";

function Table({ data, changeTable }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Project</th>
          {changeTable !== 2 && (
            <>
              <th scope="col">Employee</th>
              <th
                scope="col"
                style={
                  changeTable === 3 ? { display: "none" } : { display: "block" }
                }
              >
                Date
              </th>
            </>
          )}

          <th scope="col">Hours</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => (
          <tr key={index}>
            <td>{el.project?.name || el?.name}</td>
            {changeTable !== 2 && (
              <>
                <td>{el.employee?.name || el?.employee}</td>
                <td
                  style={
                    changeTable === 3
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  {moment(el?.date).format("LL", "it-IT")}
                </td>
              </>
            )}
            <td>{el?.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
