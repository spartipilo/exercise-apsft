import moment from "moment/moment";
import React from "react";

function Table({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Employee</th>
          <th scope="col">Date</th>
          <th scope="col">Hours</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => (
          <tr key={index}>
            <td>{el.project.name}</td>
            <td>{el.employee.name}</td>
            <td>{moment(el.date).format("ll")}</td>
            <td>{el.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
