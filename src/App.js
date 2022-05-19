import React, { Fragment, useState } from "react";

import { AddEmployee, Employee } from "./components";

const employeesList = [
  {
    id: 0,
    name: "Chris Hatch",
    position: "Software Developer",
    salary: 130000,
  },
  {
    id: 1,
    name: "Elizabeth Montgomery",
    position: "Lead Research Engineer",
    salary: 70000,
  },
  {
    id: 2,
    name: "Aiden Shaw",
    position: "Machine Learning Engineer",
    salary: 80000,
  },
];

const App = () => {
  const [list, setList] = useState(employeesList);
  const [editFormData, setEditFormData] = useState({ salary: 1000 });
  const [editedEmployeeId, setEditEmployeeId] = useState(null);

  const handleEditFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newFormData = { ...editFormData };
    newFormData[name] = parseInt(value);
    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const editedEmployee = {
      id: editedEmployeeId,
      name: editFormData.name,
      position: editFormData.position,
      salary: editFormData.salary,
    };

    const newEmployees = [...list];
    const index = list.findIndex((item) => item.id === editedEmployeeId);
    newEmployees[index] = editedEmployee;
    setList(newEmployees);
    setEditEmployeeId(null);
  };

  const handleEditClick = (e, employee) => {
    e.preventDefault();
    setEditEmployeeId(employee.id);
    const formValues = {
      name: employee.name,
      position: employee.position,
      salary: employee.salary,
    };
    setEditFormData(formValues);
  };

  return (
    <Fragment>
      <div className="card w-55 mx-auto mt-75 pb-5">
        <table data-testid="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((employee, idx) => (
              <tr key={employee.id} data-testid={`row-${idx}`}>
                <Employee
                  idx={idx}
                  employee={employee}
                  editFormData={editFormData}
                  handleEditClick={handleEditClick}
                  editedEmployeeId={editedEmployeeId}
                  handleEditFormChange={handleEditFormChange}
                  handleEditFormSubmit={handleEditFormSubmit}
                />
              </tr>
            ))}
            <tr>
              <AddEmployee list={list} setList={setList} />
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default App;
