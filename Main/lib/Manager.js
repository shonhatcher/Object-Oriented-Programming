const Employee = require ('Employee.js');

class Manager extends Employee {
    constructor(name,id, email,officeNumber) {
        super(name);
        super(id);
        super(email);
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
        let x = Manager;
        return x;
    }

}
