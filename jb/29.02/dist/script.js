"use strict";
class human {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    suspend() { }
}
class teacher extends human {
    set salary(value) {
        if (value !== 0) {
            this.salary = value;
        }
    }
    get salary() {
        if (this.salary > 10000) {
            return 0;
        }
        return this.salary;
    }
    constructor(name, lastName, age) {
        super(name, lastName, age);
    }
}
class student extends human {
    set grade(value) {
        if (value > 100) {
            value = 100;
        }
    }
    get grade() {
        if (this.grade < 60) {
            return 60;
        }
        return this.grade;
    }
    constructor(name, lastName, age) {
        super(name, lastName, age);
    }
    suspend() {
        console.log("You are suspended");
    }
}
