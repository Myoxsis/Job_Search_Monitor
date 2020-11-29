const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://maxime_alain:www.myoxsis.com@localhost:5432/job_monitor');

offer = {};

//
class Offer extends Model {}
Offer.init({
    name: { type: DataTypes.STRING, },
    link: { type: DataTypes.STRING, },
    company: { type: DataTypes.STRING, },
    function: { type: DataTypes.STRING, },
    details: { type: DataTypes.TEXT, },
    //desc: {type: DataTypes.TEXT, allowNull : true }
    }, {
    sequelize,
    timestamps: true,
    modelName: 'offer',
});

function createOffer(x) {
    Offer.create({ name: x.name, link: x.link, company: x.company,
        function: x.function, details: x.details, 
    }).then( offer => {
    console.log("Offer Generate ID", offer.id);
    });
}

function isIdUnique (x) {
    return Offer.count({ where: { name: x.name, link: x.link, company: x.company,
        function: x.function, details: x.details,  } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
    });
}

function resetDatabase() {
    Offer.sync({ force: true })
}

// the defined model is the class itself
console.log(Offer === sequelize.models.offer);

module.exports = { createOffer, isIdUnique, resetDatabase };