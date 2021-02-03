const ora = require('ora');
const cron = require('node-schedule');
const prompt = require('prompt');

const scrapper = require("./scrappers");



function runMode() {
    console.log('Start at : ', new Date());
    const spinner = ora('Waiting next wave\n');
    spinner.start();
    spinner.warn();
    scrapper.scrapAll();
    spinner.start();

    

    cron.scheduleJob('*/30 * * * *', function(){
        scrapper.scrapAll();
        spinner.warn();
        console.log('Last update : ', new Date());
        spinner.start();
        
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


