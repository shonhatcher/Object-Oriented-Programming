const Employee = require ('./Employee.js');

class Manager extends Employee {
    constructor(name,id, email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
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

    getRole(x){
        var x = "Manager";
        return x;
    }

}

module.exports = Manager;