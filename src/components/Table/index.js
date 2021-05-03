import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table border={2} cellPadding={5}>
          <thead>
            <tr>
              <td>Image</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email ID</td>
              <td>Phone Number</td>
            </tr>
          </thead>

          <tbody>
            {
              props.results &&
              props.results.map(function (element) {
                return <tr>
                  <td><img src={element.picture.thumbnail} alt=""/></td>
                  <td>{element.name.first}</td>
                  <td>{element.name.last}</td>
                  <td>{element.email}</td>
                  <td>{element.phone}</td>
                </tr>;
              })
            }
          </tbody>
        </table>
  );
}

export default Table;
