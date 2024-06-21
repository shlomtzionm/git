import { OkPacketParams } from "mysql2"
import { dal } from "../2-utils/dal"
import { EmployeeModel } from "../3-models/employee-model"
import { RecourseNotFoundError } from "../3-models/client-error"
import { fileSaver } from "uploaded-file-saver"

class EmployeeServices{
    public async getAllEmployees(){
const sql = "select *, concat('http://localhost:4000/api/employees/images/', imageName) as imageUrl from employees"
const employees = await dal.execute(sql)
return employees
    }

    public async getOneEmployee(id:number){
        const sql = "select *, concat('http://localhost:4000/api/employees/images/', imageName) as imageUrl from employees where id = ?"
        const employees = await dal.execute(sql,[id])
        const employee = employees[0]

        if(!employee){
          throw new RecourseNotFoundError(id)
        }
        return employee
            }
        
      
        
  public async addEmployee(employee: EmployeeModel) {
    employee.validate()
    const imageName = await fileSaver.add(employee.image)
    const sql = "insert into employees(firstName, lastName, birthDate, imageName) values(?,?,?,?)";
 const info :OkPacketParams = await dal.execute(sql, [
      employee.firstName,
      employee.lastName,
      employee.birthDate,
      imageName
      
    ]);
const addedEmployee = await this.getOneEmployee(info.insertId)
    return addedEmployee;
  }
          
          

  public async updateEmployee(employee: EmployeeModel) {
    employee.validate()
    const sql = "UPDATE employees SET firstName = ?, lastName = ?, birthDate = ? WHERE id = ?";
    const info: OkPacketParams = await dal.execute(sql, [
      employee.firstName,
      employee.lastName,
      employee.birthDate,
      employee.id
    ]);

    if (info.affectedRows === 0){
      throw new RecourseNotFoundError(employee.id)
    }
return info
}


public async deleteEmployee(id: number) {
    const sql = "DELETE FROM employees WHERE id = ?";
    const info = await dal.execute(sql, [id]);

    if (info.affectedRows === 0){
      throw new RecourseNotFoundError(id)
    }

    return info
  }
}
export const employeeServices = new EmployeeServices()