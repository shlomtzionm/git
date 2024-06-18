import express, { Response, Request, NextFunction } from "express";
import { employeeServices } from "../4-services/employee-services";
import { EmployeeModel } from "../3-models/employee-model";
import { StatusCode } from "../3-models/enums";

class EmployeeController {
  public readonly router = express.Router();

  public constructor() {
    this.router.get("/employees", this.getAllEmployeees);
    this.router.get("/employees/:id([0-9]+)", this.getOneEmployeees);
    this.router.post("/employees", this.addEmployee);
    this.router.post("/employees/:id([0-9]+)", this.updateEmployee);
    this.router.delete("/employees/:id([0-9]+)", this.deleteEmployee);


  }

  private async getAllEmployeees(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const employees = await employeeServices.getAllEmployees();
      res.json(employees);
    } catch (err: any) {
      next(err);
    }
  }

  private async getOneEmployeees(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
        const id = +req.params.id
      const employee = await employeeServices.getOneEmployee(id);
      res.json(employee);
    } catch (err: any) {
      next(err);
    }
  }


  private async addEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const employee = new EmployeeModel(req.body);
      const addedEmployee = await employeeServices.addEmployee(employee);
      res.status(StatusCode.Created).json(addedEmployee);
    } catch (err: any) {
      next(err);
    }
  }

  private async updateEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      req.body.id = id;
      const employee = new EmployeeModel(req.body);
      const info = await employeeServices.updateEmployee(employee)
      res.json(info);
    } catch (err: any) {
      next(err);
    }
  }

  private async deleteEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      await employeeServices.deleteEmployee(id)
      res.sendStatus(StatusCode.NoContent);
    } catch (err: any) {
      next(err);
    }
  }
}

export const employeeController = new EmployeeController();
