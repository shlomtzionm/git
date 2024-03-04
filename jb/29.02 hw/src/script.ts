class Army {
  name: string;
  lastName: string;
  phoneNumber: number;
  serviceBase: string;
  salary: number;
  unit: string;
  constructor(
    name: string,
    lastName: string,
    phoneNumber: number,
    serviceBase: string,
    salary: number,
    unit: string
  ) {
   this.name = name; 

   this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.serviceBase = serviceBase;
    this.salary = salary;
    this.unit = unit;
  }
}



class Soldier extends Army{
readonly releaseDate: Date;
readonly recruitmentDate: Date;

constructor( name: string,
    lastName: string,
    phoneNumber: number,
    serviceBase: string,
    salary: number,
    unit: string,
    releaseDate : Date,
    recruitmentDate: Date){
        super(name,lastName,phoneNumber,serviceBase,salary,unit)
        this.releaseDate = releaseDate;
        this.recruitmentDate = recruitmentDate
    }

yearsOfService(): number {
    return this.releaseDate.getFullYear() - this.recruitmentDate.getFullYear()
     
}

}

let david = new Soldier("david", "div", 123, "a", 5000, "alpha", new Date(2020 , 7 ,26) , new Date(2018,10,6),)
console.log(david.yearsOfService())