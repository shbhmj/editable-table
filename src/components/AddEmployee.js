import React, { Fragment, useState } from "react";

const AddEmployee = ({ list, setList }) => {
  const initialValues = {
    name: "",
    position: "",
    salary: "",
  };

  const [addFormData, setAddFormData] = useState(initialValues);
  const [disabled, setDisabled] = useState(true);

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newFormData = { ...addFormData };
    newFormData[name] = value.trim();
    setAddFormData(newFormData);

    if (
      addFormData.name !== "" &&
      addFormData.position !== "" &&
      addFormData.salary !== ""
    )
      setDisabled(false);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: list.length,
      name: addFormData.name,
      position: addFormData.position,
      salary: addFormData.salary,
    };
    const inputs = [...document.querySelectorAll("input")];
    let allValid = inputs.every((input) => input.reportValidity());
    if (allValid) {
      const newEmployees = [...list, newEmployee];
      setList(newEmployees);
      setDisabled(true);
    }
    setAddFormData(initialValues);
  };

  return (
    <Fragment>
      <td className="pl-30">
        <input
          data-testid="new-employee-name-input"
          placeholder="Enter Name"
          type="text"
          name="name"
          required
          value={addFormData.name}
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-position-input"
          placeholder="Enter Position"
          type="text"
          name="position"
          required
          value={addFormData.position}
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-salary-input"
          placeholder="Enter Salary"
          type="number"
          name="salary"
          required
          value={addFormData.salary}
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <button
          data-testid="add-new-employee-button"
          className="x-small w-75 ma-0 px-25"
          type="submit"
          onClick={handleAddFormSubmit}
          disabled={disabled}
        >
          Add
        </button>
      </td>
    </Fragment>
  );
};

export default AddEmployee;
