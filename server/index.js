const express = require("express");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const helmet = require("helmet");
const cors = require("cors");

require('dotenv').config();

const middlewares = require('./middlewares');
const idx = require("./OfferModel");

const sequelize = new Sequelize('postgres://maxime_alain:www.myoxsis.com@localhost:5432/job_monitor');
const last_update = "";

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection successful');
    })
    .catch(err => {
        console.error('Connection Unsucessful', err);
    });

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message : 'Hello World',
    }); 
});

app.get('/offers', async (req, res) => {

    // SELECT "id", "name", "link", "company", "function", "details", "desc", "createdAt", "updatedAt" 
    // FROM "offers" AS "offer"

    try {
        const offer = await idx.getDB();
        res.json(offer);
    } catch (error) {
        res.json(error);
    }
});

app.get('/offers/today', async (req, res) => {

    // SELECT "id", "name", "link", "company", "function", "details", "desc", "createdAt", "updatedAt" 
    // FROM "offers" AS "offer" 
    // WHERE "offer"."createdAt" BETWEEN 'START_DAY' AND 'NOW'

    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const NOW = new Date();
    try {
        const offer = await idx.getTodayOffers(TODAY_START, NOW);
        res.json(offer);
    }
    catch(error) {
        console.error(error);
    }
}); 

app.get('/offers/last', async (req, res) => {

    // SELECT "id", "name", "link", "company", "function", "details", "desc", "createdAt", "updatedAt" 
    // FROM "offers" AS "offer" 
    // WHERE "offer"."createdAt" BETWEEN 'START_DAY' AND 'NOW'

    
    const NOW = new Date();
    try {
        const offer = await idx.getTodayOffers(last_update, NOW);
        res.json(offer);
    }
    catch(error) {
        console.error(error);
    }

    console.log("Hello Worlds");
}); 

app.get('/offers/last_update_time', async (req, res) => {

    try {
        const offer = await idx.getUpdateDateArray();
        res.json(offer[Object.keys(offer)[0]].dataValues);
        const last_update = offer[Object.keys(offer)[0]].dataValues;
    }
    catch(error) {
        console.error(error);
    }

}); 

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});