import React, { Fragment, useState } from "react";

const Employee = ({
  idx,
  employee,
  editFormData,
  editedEmployeeId,
  handleEditClick,
  handleEditFormChange,
  handleEditFormSubmit,
}) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Fragment>
      <td>{employee.name}</td>
      <td className="pl-20">{employee.position}</td>
      <td className="pl-20">
        {editMode && employee.id === editedEmployeeId ? (
          <input
            data-testid={"employee-salary-input-" + idx}
            type="number"
            name="salary"
            value={editFormData.salary}
            onChange={(e) => {
              handleEditFormChange(e);
            }}
          />
        ) : (
          <div
            data-testid={"employee-salary-div-" + idx}
            onClick={(e) => {
              handleEditClick(e, employee);
              setEditMode(true);
            }}
          >
            {employee.salary}
          </div>
        )}
      </td>
      <td className="pl-20">
        <button
          className={"x-small w-75 ma-0 px-25"}
          data-testid={"employee-save-button-" + idx}
          disabled={
            !editMode ||
            employee.id !== editedEmployeeId ||
            !(editFormData.salary >= 0)
          }
          onClick={(e) => {
            setEditMode(false);
            handleEditFormSubmit(e);
          }}
        >
          Save
        </button>
      </td>
    </Fragment>
  );
};

export default Employee;
