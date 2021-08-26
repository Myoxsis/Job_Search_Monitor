const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require('puppeteer');
const idx = require("./OfferModel");
const ora = require('ora');

async function scrapTechnip() {
    const page_url = 'https://technip.referrals.selectminds.com/technipfmc/jobs/search/7535477'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('.job_list_row').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('.jlr_title p')).find('a').text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('.jlr_title p')).find('a').attr('href');
        offers.company = 'TechnipFMC';
        offers.function = $element.find($('.jlr_company')).text();
        offers.details = $element.find('.jlr_cat_loc').map((i, el) => {
            return $(el).text();
          }).get().join(' /*/ ').replace(/\s\s+/g, ' ').trim();

        list_offers.push(offers);
    });
    //const spinner = ora('Scrapping TechnipFMC\n');
    //spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const html = cheerio.load(data);
            list_offers[i].desc = html('.job_description').text().replace(/\s\s+/g, ' ').trim();
            //idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    //spinner.succeed();
    console.log(list_offers);
};

scrapTechnip();