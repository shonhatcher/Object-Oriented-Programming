const Employee = require ("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name,id,email, and school name if provided", () =>{
            var intern = new Intern("John",1,"abc@hotmail.com","UCF");
            expect(intern.name).toEqual("John"); 
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("abc@hotmail.com");
            expect(intern.school).toEqual("UCF"); 
        }) 
    }) 

describe("getName", () => {
//    describe("Initialization", () => {
        it("should return the name entered", () =>{
           var obj = new Intern("Chris",1,"abc@hotmail.com","shonhatc");
            expect (obj.name).toEqual("Chris"); 
        }) 
    }) 

describe("getID",() =>{
    it("should return the ID entered", () => {
        var intern = new Intern("John",1,"abc@hotmail.com","shonhatc");
        expect (intern.id).toEqual(1); 
    })
})

describe("getEmail",() =>{
    it("should return the email entered, should contain '@' symbol, should contain'.com'", () => {
       var intern = new Intern("John",1,"abc@hotmail.com","shonhatc");
        expect (intern.email).toEqual("abc@hotmail.com"); 
        expect(intern.email).toContain("@");
        expect(intern.email).toContain(".com");
    })
})
describe("getRole",() =>{
    it("should return Intern", () => {
        var obj = new Intern("John",1,"abc@hotmail.com","shonhatc");
        // expect(obj.getRole(Engineer)).toEqual("Engineer"); 
        expect(obj.getRole(Employee)).toEqual("Intern"); 

    })
})
describe("getSchool",() =>{
    it("should return the intern's school name", () => {
      var obj = new Intern("John",1,"abc@hotmail.com","UCF");
        expect(obj.school).toEqual("UCF"); 
               // expect(obj.getRole(Employee)).toEqual("Employee"); 

    })
})
})