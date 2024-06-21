import axios from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { appConfig } from "../Utils/AppConfig";

class EmployeeServices{

public async getAllEmployees(){
    const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl)
const employees = response.data
return employees

}
}

export const employeeServices = new EmployeeServices()