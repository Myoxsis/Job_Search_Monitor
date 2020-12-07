const ora = require('ora');
const cron = require('node-schedule');

console.log('Start at : ', new Date());

const spinner = ora('Waiting next wave\n').start();

    setTimeout(() => {
        spinner.color = 'yellow';
        spinner.text = 'Waiting next wave\n';
    }, 1000);

cron.scheduleJob('* * * * *', function(){
    console.log('Last update : ', new Date());
    const spinner = ora('Waiting next wave\n').start();

    setTimeout(() => {
        spinner.color = 'yellow';
        spinner.text = 'Waiting next wave\n';
    }, 1000);
});



