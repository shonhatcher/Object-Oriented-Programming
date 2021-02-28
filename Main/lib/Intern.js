const Employee = require ('Employee.js');

class Intern extends Employee {
    constructor(name,id, email,school) {
        super(name);
        super(id);
        super(email);
        this.school = school;
    }
    getName() {
        return super.getName();
    }

    getID (){
        return super.getID();
    }

    getEmail() {
        return super.getEmail();
    }

    getSchool(){
        return this.school;
    }

    getRole(x){
        let x = Intern;
        return x;
    }

}
