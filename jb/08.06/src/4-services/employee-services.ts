import { OkPacketParams } from "mysql2"
import { dal } from "../2-utils/dal"
import { EmployeeModel } from "../3-models/employee-model"

class EmployeeServices{
    public async getAllEmployees(){
const sql = "select * from employees"
const employees = await dal.execute(sql)
return employees
    }

    public async getOneEmployee(id:number){
        const sql = "select * from employees where id = ?"
        const employees = await dal.execute(sql,[id])
        const employee = employees[0]
        return employee
            }
        
      
        
  public async addEmployee(employee: EmployeeModel) {
    const sql = "insert into employees(firstName, lastName, birthDate) values(?,?,?)";
 const info :OkPacketParams = await dal.execute(sql, [
      employee.firstName,
      employee.lastName,
      employee.birthDate,
    ]);
const addedEmployee = await this.getOneEmployee(info.insertId)
    return addedEmployee;
  }
          
          

  public async updateEmployee(employee: EmployeeModel) {
    const sql = "UPDATE employees SET firstName = ?, lastName = ?, birthDate = ? WHERE id = ?";
    const info: OkPacketParams = await dal.execute(sql, [
      employee.firstName,
      employee.lastName,
      employee.birthDate,
      employee.id
    ]);
return info
}


public async deleteEmployee(id: number) {
    const sql = "DELETE FROM employees WHERE id = ?";
    const info = await dal.execute(sql, [id]);
    return info
  }
}
export const employeeServices = new EmployeeServices()