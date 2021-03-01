const Employee = require ('./Employee.js');

class Intern extends Employee {
    constructor(name,id, email,school) {
        super(name,id,email);
        this.school = school;
    }
    getName() {
        return Intern.name;
    }

    getID (){
        return Intern.id;
    }

    getEmail() {
        return Intern.email;
    }

    getSchool(){
        return this.school;
    }

    getRole(x){
        var x = "Intern";
        return x;
    }

}

module.exports = Intern;