"use strict";
function createUser(name, age) {
    return { name, age };
}
const myCreateUser = function (name, age) {
    return {
        name,
        age
    };
};
console.log(myCreateUser("John", 25)); // Expected output: { name: "John", age: 25 }
