"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
;
const person = {
    name: "sudip",
    age: 34,
    hobbies: ['music', 'reading'],
    Role: Role.USER
};
const person1 = person;
console.log(person1);
let favActivity; // type declaration
favActivity = ['cricket', 'music']; //assignment
for (const activity of favActivity) {
    console.log(activity.toUpperCase());
}
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.Role === Role.USER) {
    console.log('role is user');
}
//# sourceMappingURL=objects-arrays-enums.js.map