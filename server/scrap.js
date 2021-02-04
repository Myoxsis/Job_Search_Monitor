const axios = require("axios");
const cheerio = require("cheerio");
const { colors } = require("prompt");
const idx = require("./OfferModel");
const ora = require('ora');

/*
    - Daher not working / Complex hierarchy and automated page
    - Add Engie Scrap // Not working yet
*/

/*
async function scrapVallourec() {
    const page_url = 'https://career012.successfactors.eu/career?company=VALLOUREC&career%5fns=job%5flisting%5fsummary&navBarLevel=JOB%5fSEARCH&site=VjItcmY2YVFFcnJMYWhIb3RmMzhTYU9Ldz09&_s.crb=%2buS2XeY4ufxPmn6KcLPOhSH3bjvEkt1pHwHMISVKROE%3d';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    //var list_offers = [];

    //#\33 6\: > table > tbody > tr:nth-child(4)
    //document.querySelector("#\\33 6\\:")
    //document.querySelector("#\\33 6\\: > table > tbody > tr:nth-child(4) > td:nth-child(1) > div:nth-child(1) > a")

    ///html/body/as:ajaxinclude/as:ajaxinclude/form/div[3]/div/div/div[2]/div/table/tbody/tr/td[2]/div/div/table/tbody/tr[4]

    $(`#\\33 6\\: > table > tbody > tr:nth-child(4)`).each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('a.jobTitle')).text().replace(/\s\s+/g, ' ').trim();
        //offers.link = $element.find($('a.jobTitle')).attr('href');
        //offers.company = "Vallourec";
        //offers.function = $element.find($('p.position3')).text().replace(/\s\s+/g, ' ').trim();;
        //offers.details = ($element.find($('div.jobValues')).map((i, el) => {
        //    return $(el).text();
        //  }).get().join(' /*/ /*'));

        //list_offers.push(offers);
        console.log(offers);
    });
    //const spinner = ora('Scrapping Total\n');
    //spinner.start();
    //for (var i = 0; i < list_offers.length; i++) {
        //try{
            
        //} catch(e) {
            //console.log(e.message);
        //}
        //console.log(list_offers[i].link);
        //const { data } = await axios.get(list_offers[i].link);
        //const $ = cheerio.load(data);

        //list_offers[i].desc = $('div#job-details').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();

        //console.log("Total : " + i);
        //idx.add_to_db(list_offers[i]);
        //console.log(list_offers[i]);
    //};
    //spinner.succeed();
    //console.log("Scrapped Total : " + list_offers.length);
};





scrapVallourec();