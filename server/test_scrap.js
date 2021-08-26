const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require('puppeteer');
const idx = require("./OfferModel");
const ora = require('ora');

async (req, res) => {

  // SELECT "id", "name", "link", "company", "function", "details", "desc", "createdAt", "updatedAt" 
  // FROM "offers" AS "offer"

  try {
      const offer = await idx.getLinksList();
      res.json(offer);
  } catch (error) {
      res.json(error);
  }
}

console.log(offer);

async function scrapPSA() {
  const page_url = 'https://jobs.groupe-psa.com/offre-de-emploi/liste-offres.aspx?lcid=1036&facet_JobDescription_Contract=577&mode=list';
  const { data } = await axios.get(page_url);
  const $ = cheerio.load(data);
  var list_offers = [];
  

  

  $('ul.ts-related-offers__row li').each((i, element) => {
      const $element = $(element);
      const offers = {};
      offers.link = ("https://jobs.groupe-psa.com" + $element.find($('a.ts-offer-list-item__title-link')).attr('href'));
      //if XXXXX.includes(offers.link)
      offers.name = $element.find($('a.ts-offer-list-item__title-link')).text().replace(/\s\s+/g, ' ').trim();
      offers.company = "PSA";
      offers.function = "";
      offers.details = $element.find('ul.ts-offer-list-item__description').find('li').map((i, el) => {
          return $(el).text();
        }).get().join(' /*/ ').replace(/\s\s+/g, ' ').trim();

      if (offers.name !== '') {list_offers.push(offers);}
  });
  const spinner = ora('Scrapping PSA\n');
  spinner.start();
  for (var i = 0; i < list_offers.length; i++) {
      try{
          const { data } = await axios.get(list_offers[i].link);
          const $ = cheerio.load(data);

          list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').trim();
          //idx.add_to_db(list_offers[i]);
      } catch(e) {
          console.log(e.message);
      }
  };
  spinner.succeed(); 
};