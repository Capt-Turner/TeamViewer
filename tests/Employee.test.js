const Employee=require("../lib/Employee");

test('Can create a new Employee instance',()=>{
    const e=new Employee();
    expect(typeof(e)).toBe('object');
});

test('Can assign a name to an Employee',()=>{;
    const name="Jack";
    const e=new Employee(name);
    expect(e.name).toBe(name);
});

test('Can assign an email to an Employee',()=>{
    const email='Jack@test.com';
    const e=new Employee('Jack',1, email);
    expect(e.email).toBe(email);
});

test('getRole() should return \"Employee\"',()=>{
    const role="Employee";
    const e=new Employee('Jack',1,'Jack@test.com');
    expect(e.getRole()).toBe(role);
});