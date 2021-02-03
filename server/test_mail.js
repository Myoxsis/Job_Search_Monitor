const nodemailer = require("nodemailer");
const idx = require("../client/src/API");
const fetch = require("node-fetch");

offers = idx.listTodayOffers()

console.log(offers);


/*var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "127650ff4567ad",
      pass: "fa6ad8642f0f97"
    }
  });

const message = {
    from: 'from@companytest.com',
    to: 'to@companyrecipient.com',
    subject: "Impalium - Today's Digest",
    text: idx.getTodayOffers(TODAY_START, NOW)
};

transport.sendMail(message, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
})*/;