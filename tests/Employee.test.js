const Employee=require("../lib/Employee");

test('Can create a new Employee instance',()=>{
    const e=new Employee();
    expect(typeof(e)).toBe('object');
});

test('Can assign a name to an Employee',()=>{;
    const e=new Employee();
    const name="Jack";
    expect(e.name).toBe(name);
});

test('Can assign an email to an Employee',()=>{
    const e=new Employee('Jack',1);
    const email='Jack@test.com';
    expect(e.email).toBe(email);
});

test('getRole() should return \"Employee\"',()=>{
    const e=new Employee('Jack',1,'Jack@test.com');
    const role="Employee";
    expect(e.getRole()).toBe(role);
});