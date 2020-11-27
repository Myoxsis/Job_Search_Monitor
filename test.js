const idx = require("./UserModel");

const user = {};

user.firstname = "Roberto";
user.lastName = "Carlos";

console.log(user);
idx.createUser(user.firstname, user.lastName);
