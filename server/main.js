const ora = require('ora');
const cron = require('node-schedule');
const prompt = require('prompt');

const scrapper = require("./scrappers");



function runMode() {
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

}

function punctualMode() {
    console.log('Start at : ', new Date());
    scrapper.scrapAll();
}

prompt.start();
prompt.get(['run_Mode'], function (err, result) {
    if (err) { return onErr(err); }
    else if (result.run_Mode.toLowerCase() == "run") {
        console.log('  Run Mode ...');
        runMode();
    }
    else if (result.run_Mode.toLowerCase() == "punctual") {
        console.log('  Punctual Mode ...');
        punctualMode();
    }
    else {
        console.log('  Please enter a valid value : Run or Punctual');
    }
});


