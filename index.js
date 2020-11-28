const express = require("express");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('postgres://maxime_alain:www.myoxsis.com@localhost:5432/job_monitor');

const Offer = require("./OfferModel");

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection successful');
    })
    .catch(err => {
        console.error('Conncetion Unsucessfful', err);
    });

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message : 'hello world' });
})

app.post('/offer', async (req, res) => {
    try {
        const newOffer = new Offer(req.body);
        await newOffer.save();
        res.json({offer : newOffer });
    }
    catch(error) {
        console.error(error);
    }
})

app.get('/offer/:offerId', async (req, res) => {
    const offerId = req.params.offerId
    try {
        const offer = await Offer.findAll({
            where: {
                id : offerId
            }
        })
        res.json({ offer });
    }
    catch(error) {
        console.error(error);
    }
})

app.listen,(port, () => {
    console.log(` Example app listening to port ${port}`);
})