const scrapper = require("./test");

const ora = require('ora');
const cron = require('node-schedule');

console.log('Start at : ', new Date());
scrapper.scrapAll();

const spinner = ora('Waiting next wave\n').start();

    setTimeout(() => {
        spinner.color = 'yellow';
        spinner.text = 'Waiting next wave\n';
    }, 1000);

cron.scheduleJob('*/30 * * * *', function(){
    scrapper.scrapAll();
    console.log('Last update : ', new Date());
    const spinner = ora('Waiting next wave\n').start();

    setTimeout(() => {
        spinner.color = 'yellow';
        spinner.text = 'Waiting next wave\n';
    }, 1000);
});



