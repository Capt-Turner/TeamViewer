const Manager=require('../lib/Manager');
const Employee=require('../lib/Employee');

test('Can assign an office number',()=>{
    const office=123;
    const e=new Manager('Jack',1,'Jack@test.com',office);
    expect(e.officeNumber).toBe(office);
});

test('getRole() should return \"Manager\"',()=>{
    const role="Manager";
    const e=new Manager('Jack',1,'Jack@test.com',123);
    expect(e.getRole()).toBe(role);
});