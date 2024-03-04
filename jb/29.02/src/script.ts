class human {
  name: string;
  lastName: string;
  age: number;
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
 suspend(){}

}

class teacher extends human {
  set salary(value: number) {
    if (value !== 0) {
      this.salary = value
    }
  }

  get salary() {
    if (this.salary > 10000) {
      return 0;
    }
    return this.salary
  }
  constructor(name: string, lastName: string, age: number) {
    super(name, lastName, age);
  }
}

class student extends human {
  
  set grade (value:number){
    if (value > 100){
        value = 100
    }
  }
  
    get grade(){
    if ( this.grade < 60) {
     return 60
    } return this.grade
  } 
  
  constructor(name: string, lastName: string, age: number){
    super(name,lastName,age)
  }

  suspend(): void {
      console.log("You are suspended")
  }
}
