const Employee = require ("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name,id,email, and github username if provided", () =>{
            var engineer = new Engineer("John",1,"abc@hotmail.com","shonhatc");
            expect(engineer.name).toEqual("John"); 
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("abc@hotmail.com");
            expect(engineer.github).toEqual("shonhatc"); 
        }) 
    }) 

describe("getName", () => {
//    describe("Initialization", () => {
        it("should return the name entered", () =>{
           var obj = new Engineer("Chris",1,"abc@hotmail.com","shonhatc");
            expect (obj.name).toEqual("Chris"); 
        }) 
    }) 

describe("getID",() =>{
    it("should return the ID entered", () => {
        var engineeer = new Engineer("John",1,"abc@hotmail.com","shonhatc");
        expect (engineeer.id).toEqual(1); 
    })
})

describe("getEmail",() =>{
    it("should return the email entered, should contain '@' symbol, should contain'.com'", () => {
       var engineer = new Engineer("John",1,"abc@hotmail.com","shonhatc");
        expect (engineer.email).toEqual("abc@hotmail.com"); 
        expect(engineer.email).toContain("@");
        expect(engineer.email).toContain(".com");
    })
})
describe("getRole",() =>{
    it("should return 'Engineer'", () => {
        var obj = new Engineer("John",1,"abc@hotmail.com","shonhatc");
        // expect(obj.getRole(Engineer)).toEqual("Engineer"); 
        expect(obj.getRole(Employee)).toEqual("Engineer"); 

    })
})
describe("gitHub",() =>{
    it("should return the employee's Github username", () => {
      var obj = new Engineer("John",1,"abc@hotmail.com","shonhatc");
        expect(obj.github).toEqual("shonhatc"); 
               // expect(obj.getRole(Employee)).toEqual("Employee"); 

    })
})
})

