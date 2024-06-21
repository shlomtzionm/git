import { useEffect, useState } from "react";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import "./EmployeeList.css";
import { employeeServices } from "../../../Services/employeeServices";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";

export function EmployeeList(): JSX.Element {
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);

  useEffect(() => {
    employeeServices
      .getAllEmployees()
      .then((employees) => setEmployees(employees))
      .catch((err) => alert(err.message));
  }, []);

  return (<div className="EmployeeList">
    {employees.map(e=><EmployeeCard employee={e} key={e.id}/>)}
  </div>);
}
