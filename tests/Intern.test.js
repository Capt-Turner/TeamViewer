const Intern=require('../lib/Intern');

test('Can assign a school to Intern',()=>{
    const school="UCF";
    const e=new Intern('Jack',1,'Jack@test.com',school);
    expect(e.school).toBe(school);
});

test('getRole() should return \"Intern\"',()=>{
    const role="Intern";
    const e=new Intern('Jack',1,'Jack@test.com',role);
    expect(e.getRole()).toBe(role);
});