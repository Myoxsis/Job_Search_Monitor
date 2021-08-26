const puppeteer = require('puppeteer');
const cheerio = require("cheerio");
const idx = require("./OfferModel");
const ora = require('ora');

async function scrapTotal() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://krb-sjobs.brassring.com/TGnewUI/Search/Home/Home?partnerid=30080&siteid=6559#home');
  await page.waitForSelector("#searchControls_BUTTON_2");
  await page.click('#searchControls_BUTTON_2');
  await page.waitForNavigation();
  await page.waitForSelector(".jobList");
  const data = await page.content();
  const $ = cheerio.load(data);
  var list_offers = [];
  var list_links = [];

  $('.job').each((i, element) => {
      const $element = $(element);
      const link = $element.find($('.jobtitle')).attr('href');

      if (typeof link !== 'undefined') {list_links.push(link);}
  });
  const spinner = ora('Scrapping Total\n');
  spinner.start();
  for (var i = 0; i < list_links.length; i++) {
    try{
        await page.goto(list_links[i]);
        await page.waitForNavigation();
        await page.waitForSelector(".answer");
        await page.waitForTimeout(3000);
        const data = await page.content();
        const offers = {};
        const $ = cheerio.load(data);
        offers.name = $('h1.jobtitleInJobDetails').text().replace(/\s\s+/g, ' ').trim();
        offers.link = list_links[i];
        offers.company = 'Total';
        offers.function = $('p.position3InJobDetails').text().replace(/\s\s+/g, ' ').trim();
        offers.details = '';
        offers.desc = $('.answer').text();

        idx.add_to_db(offers);
        //console.log(offers);
    } catch(e) {
        console.log(e.message);
    }
};
  browser.close();
  //console.log(list_offers);
  spinner.succeed();
};

scrapTotal();