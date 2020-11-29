var cron = require('node-schedule');

cron.scheduleJob('* /15 * * *', function(){
    console.log(new Date(), 'Every minutes');
});