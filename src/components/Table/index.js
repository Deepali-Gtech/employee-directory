import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"

function Table(props) {
  return (
    <div class="tablecontent">
    <table border="1" width="100%">
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
        </div>
  );
}

export default Table;
