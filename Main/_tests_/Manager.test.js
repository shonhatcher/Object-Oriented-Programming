const Employee = require ("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name,id,email, and office phone number if provided", () =>{
            var manager = new Manager("John",1,"abc@hotmail.com",5555551212);
            expect(manager.name).toEqual("John"); 
            expect(manager.id).toEqual(1);  
            expect(manager.email).toEqual("abc@hotmail.com");
            expect(manager.officeNumber).toEqual(5555551212); 
        }) 
    }) 

describe("getName", () => {
//    describe("Initialization", () => {
        it("should return the name entered", () =>{
           var obj = new Manager("Chris",1,"abc@hotmail.com","shonhatc");
            expect (obj.name).toEqual("Chris"); 
        }) 
    }) 

describe("getID",() =>{
    it("should return the ID entered", () => {
        var manager = new Manager("John",1,"abc@hotmail.com","shonhatc");
        expect (manager.id).toEqual(1); 
    })
})

describe("getEmail",() =>{
    it("should return the email entered, should contain '@' symbol, should contain'.com'", () => {
       var manager = new Manager("John",1,"abc@hotmail.com","shonhatc");
        expect (manager.email).toEqual("abc@hotmail.com"); 
        expect(manager.email).toContain("@");
        expect(manager.email).toContain(".com");
    })
})
describe("getRole",() =>{
    it("should return Intern", () => {
        var obj = new Manager("John",1,"abc@hotmail.com","shonhatc");
        // expect(obj.getRole(Engineer)).toEqual("Engineer"); 
        expect(obj.getRole(Employee)).toEqual("Manager"); 

    })
})
// describe("getSchool",() =>{
//     it("should return the intern's school name", () => {
//       var obj = new Intern("John",1,"abc@hotmail.com","UCF");
//         expect(obj.school).toEqual("UCF"); 
//                // expect(obj.getRole(Employee)).toEqual("Employee"); 

//     })
})