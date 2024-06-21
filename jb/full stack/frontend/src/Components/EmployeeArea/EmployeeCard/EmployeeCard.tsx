import { EmployeeModel } from "../../../Models/EmployeeModel";
import "./EmployeeCard.css";

type EmployeeCardProps = {
    employee: EmployeeModel;
  };

export function EmployeeCard(props: EmployeeCardProps): JSX.Element {
    return (
        <div className="EmployeeCard">
			<div>
<span>{props.employee.firstName} {props.employee.lastName}</span>
<span>{props.employee.title}</span>

<span>{new Date (props.employee.birthDate).toDateString()}</span>
            
            </div>

<div>
<span>{props.employee.imageUrl}</span>
</div>
        </div>
    );
}
