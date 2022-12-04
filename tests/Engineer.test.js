const Engineer=require('../lib/Engineer');

test('Can assign a GitHub account',()=>{
    const github='Jack@github.com';
    const e=new Engineer('Jack',1,'Jack@test.com',github);
    expect(e.github).toBe(github)
});

test('getRole() should return \"Engineer\"',()=>{
    const role="Enginner";
    const e=new Engineer('Jack',1,'Jack@test.com','Jack@gihub.com');
    expect(e.getRole()).toBe(role);
});