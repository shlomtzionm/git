import { UploadedFile } from "express-fileupload";
import { ValidationError } from "./client-error";

export class EmployeeModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public birthDate: Date;
  public image: UploadedFile

  constructor(employee: EmployeeModel) {
    this.id = employee.id;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.birthDate = employee.birthDate;
    this.image = employee.image
  }

  public validate() {
    if (!this.firstName) throw new ValidationError("Missing first name.");
    if (!this.lastName) throw new ValidationError("Missing last name.");
    if (this.isUnderAge(this.birthDate))
      throw new ValidationError("Employee can't be under 18 years old.");
  }

  private isUnderAge(date: Date) {
    const today = new Date();
    date = new Date(date);
    const age = today.getFullYear() - date.getFullYear();

    if (age < 18) {
      return true;
    }
    return false;
  }
}
