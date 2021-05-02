import React, { Component } from "react";
import API from "../utils/API";

class Employee extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadEmployees();
  }

  handleSort = event => {
    console.log("sort by name");
    this.sortEmployees();
  };

  handleFilter = event => {
    console.log("filter by name");
    let filterText = document.getElementById('filter').value
    console.log(filterText);
    this.filterEmployees(filterText);
  };

  loadEmployees = () => {
    API.getEmployees()
      .then(res => {
        return this.setState({
          employees: res.data.results
        });
      }
      )
      .catch(err => console.log(err));
  };

  sortEmployees = () => {
    let employees = this.state.employees
    employees.sort(function (a, b) {
      return a.name.first > b.name.first ? 1 : -1;
    });
    return this.setState({
      employees: employees
    });
  };

  filterEmployees = (filterText) => {
    console.log("inside")
    console.log(filterText)
    let employees = this.state.employees
    let newEmployees = employees.filter(function (employee) {
      return employee.name.first.toLowerCase().includes(filterText.toLowerCase());
  });

    return this.setState({
      employees: newEmployees
    });
  };
  

  render() {
    return (
      <div>
        <button className="btn btn-success mt-5 mb-5" onClick={this.handleSort}>Sort By First Name</button>
        <div>
        <input id="filter"></input>
        <button className="btn btn-success mt-5 mb-5" onClick={this.handleFilter}>Filter By First Name</button>
        </div>
        <table border={2} cellPadding={5}>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email ID</td>
            </tr>
          </thead>

          <tbody>
            {
              this.state.employees &&
              this.state.employees.map(function (element) {
                return <tr>
                  <td>{element.name.first}</td>
                  <td>{element.name.last}</td>
                  <td>{element.email}</td>
                </tr>;
              })
            }
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Employee;
