const Employee = require ('Employee.js');

class Engineer extends Employee {
    constructor(name,id, email,github) {
        super(name);
        super(id);
        super(email);
        this.github = github;
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

    getGithub() {
        return this.github;
    }

    getRole(x){
        let x = Engineer;
        return x;
    }

}
