const express = require("express");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('postgres://maxime_alain:www.myoxsis.com@localhost:5432/job_monitor');

const User = require("./UserModel");

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection successful');
    })
    .catch(err => {
        console.error('Conncetion Unsucessfful', err);
    });

//const app = express();

//const port = 3000;


//

//app.use(express.json());

//app.get('/', (req, res) => {
//    res.json({ message : 'hello world' });
//})

//app.post('/user', async (req, res) => {
//    try {
//        const newUser = new User(req.body);
//        await newUser.save();
//        res.json({user : newUser });
//    }
//    catch(error) {
//        console.error(error);
//    }
//})

//app.get('/user/:userId', async (req, res) => {
//    const userId = req.params.userId
//    try {
//        const user = await User.findAll({
//            where: {
//                id : userId
//            }
//        })
//        res.json({ user });
//    }
//    catch(error) {
//        console.error(error);
//    }
//})

//app.listen,(port, () => {
//    console.log(` Example app listening to port ${port}`);
//})