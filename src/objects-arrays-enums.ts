
enum Role {ADMIN, AUTHOR, USER};
const person =  {
    name: "sudip",
    age: 34,
    hobbies: ['music', 'reading'],
    Role: Role.USER
};

const person1 = person;
console.log(person1);

let favActivity: string[];// type declaration
favActivity = ['cricket', 'music'];//assignment
for(const activity of favActivity) {
console.log(activity.toUpperCase());
}

for(const hobby of person.hobbies) {
    console.log(hobby);
}

if(person.Role === Role.USER) {
    console.log('role is user');
}