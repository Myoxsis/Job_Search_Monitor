const axios = require("axios");
const cheerio = require("cheerio");
const { colors } = require("prompt");
const idx = require("./OfferModel");
const ora = require('ora');

async function scrapTotal() {
    const page_url = 'https://krb-sjobs.brassring.com/TGnewUI/Search/Home/Home?partnerid=30080&siteid=6559#home';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];


    $('li').each((i, element) => {
        const $element = $(element);
        const offers = {};
        //offers.name = $element.find($('a.jobtitle')).text().replace(/\s\s+/g, ' ').trim();
        console.log($element.children());
        //offers.link = ("https://jobs.groupe-psa.com" + $element.find($('a.ts-offer-list-item__title-link')).attr('href'));
        //offers.company = "PSA";
        //offers.function = "";
        //offers.details = $element.find('ul.ts-offer-list-item__description').find('li').map((i, el) => {
        //    return $(el).text();
        //  }).get().join(' /*/ ').replace(/\s\s+/g, ' ').trim();

        //if (offers.name !== '') {
        //    list_offers.push(offers);
        //}
    });
    //const spinner = ora('Scrapping PSA\n');
    //spinner.start();
    //for (var i = 0; i < list_offers.length; i++) {
    //    try{
    //        console.log(list_offers[i].link);
    //        const { data } = await axios.get(list_offers[i].link);
    //        const $ = cheerio.load(data);

    //        list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').trim();

            //idx.add_to_db(list_offers[i]);
    //    } catch(e) {
    //        console.log(e.message);
    //    }
    //    console.log(list_offers[i]);
    //};
    //spinner.succeed();
    //console.log("Scrapped Total : " + list_offers.length);
};

scrapTotal();


/*async function scrapSodern() {
    const page_url = 'https://careers.smartrecruiters.com/SodernArianeGroup/';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];


    $('div .openings-body.js-openings li').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('h4')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('a')).attr('href');
        offers.company = "Sodern";
        offers.function = "";
        offers.details = $element.find($('p')).text().replace(/\s\s+/g, ' ').trim();

        if (offers.name !== '') {
            list_offers.push(offers);
        }
    });
    const spinner = ora('Scrapping Sodern\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            console.log(list_offers[i].link);
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);

            list_offers[i].desc = $('div .jobad-container').text();//.replace(/\s\s+/g, ' ').trim();

            //idx.add_to_db(list_offers[i]);
            console.log(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
    //console.log("Scrapped Total : " + list_offers.length);
};*/