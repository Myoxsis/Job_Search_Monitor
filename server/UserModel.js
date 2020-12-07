const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://maxime_alain:www.myoxsis.com@localhost:5432/job_monitor');

user = {};

//
class User extends Model {}
User.init({

    firstname: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, },
    }, {
    sequelize,
    timestamps: true,
    modelName: 'user',
});

function createUser(x, y) {
    User.create({ firstname: x, lastName: y}).then( user => {
    console.log("User Generate ID", user.id);
});
}

// the defined model is the class itself
console.log(User === sequelize.models.user);

module.exports = { createUser };