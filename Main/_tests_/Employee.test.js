const Employee = require ("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name,id, and email if provided", () =>{
            const employee = new Employee("John",1,"abc@hotmail.com");
            expect(employee.name).toEqual("John"); 
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("abc@hotmail.com");
        }) 
    }) 

describe("getName", () => {
//    describe("Initialization", () => {
        it("should return the name entered", () =>{
            var obj = new Employee("John",1,"abc@hotmail.com");
            expect (obj.name).toEqual("John"); 
        }) 
    }) 

describe("getID",() =>{
    it("should return the ID entered", () => {
        var obj = new Employee("John",1,"abc@hotmail.com");
        expect (obj.id).toEqual(1); 
    })
})

describe("getEmail",() =>{
    it("should return the email entered, should contain '@' symbol, should contain'.com'", () => {
        var obj = new Employee("John",1,"abc@hotmail.com");
        expect (obj.email).toEqual("abc@hotmail.com"); 
        expect(obj.email).toContain("@");
        expect(obj.email).toContain(".com");
    })
})
describe("getRole",() =>{
    it("should return 'Employee'", () => {
       var obj = new Employee("John",1,"abc@hotmail.com");
        expect(obj.getRole(Employee)).toEqual("Employee"); 
    })
})

})

