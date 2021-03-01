//const Employee = require ('Employee.js');
const Employee = require ('./Employee.js');

class Engineer extends Employee {
    constructor(name,id, email,github) {
        super(name,id,email);
        this.github = github;
    }
    getName() {
      //  super.getName();
      return Engineer.name;
    }

    getID (){
       // super.getID();
     return Engineer.id;
    }

    getEmail() {
     //   super.getEmail();
     return Engineer.email;
    }

    getGithub() {
      return this.github;
    }

    getRole(x){
        var x = "Engineer";
        return x;
    }

}

module.exports = Engineer; 