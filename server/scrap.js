const axios = require("axios");
const cheerio = require("cheerio");
const { colors } = require("prompt");
const idx = require("./OfferModel");
const ora = require('ora');

/*
    - Daher not working / Complex hierarchy and automated page
    - Add Engie Scrap // Not working yet
*/

async function scrapTotal() {
    const page_url = 'https://krb-sjobs.brassring.com/TGnewUI/Search/Home/Home?partnerid=30080&siteid=6559#keyWordSearch=pld';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    //var list_offers = [];

    $('div.liner').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('a.jobtitle')).text().replace(/\s\s+/g, ' ').trim();
        //offers.link = $element.find($('a.jobtitle')).attr('href');
        //offers.company = "Total";
        //offers.function = $element.find($('p.position3')).text().replace(/\s\s+/g, ' ').trim();;
        //offers.details = ($element.find($('div.jobValues')).map((i, el) => {
        //    return $(el).text();
        //  }).get().join(' /*/ '));

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

async function scrapAirbus() {
    const page_url = 'https://www.airbus.com/careers/search-and-apply/search-for-vacancies.html?filters=filter_2_1072&resultbypage=100';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    //var list_offers = [];

    $('.c-jobcarousel__item').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('.c-jobcarousel__slider--title')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('.c-jobcarousel__slider--title')).find('a').attr('href');
        offers.company = 'Airbus';
        offers.function = $element.find($('.colDepartment')).text().replace(/\s\s+/g, ' ').trim();
        offers.details = $element.find($('.colLocation')).text().replace(/\s\s+/g, ' ').trim();

        //list_offers.push(offers);
        console.log(offers, i);
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

scrapAirbus();

/*
Arianegroup
https://www.airliquide.com/fr/carrieres/offres-emploi #not working yet
https://cc.wd3.myworkdayjobs.com/fr-FR/ChanelCareers
https://jobs.danone.com/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_country=FR&optionsFacetsDD_facility=&optionsFacetsDD_department=Experienced+professionals
https://careers.3ds.com/jobs?woc=%7B%22country%22%3A%5B%22country%2Ffrance%22%5D%7D&wocset=6
http://careers.disneylandparis.com/en/management-business/supply-chain-procurement
https://www.place-emploi-public.gouv.fr
https://jobs.gecareers.com/global/en/search-results
https://www.invivo-group.com/fr/nos-offres
https://kering.wd3.myworkdayjobs.com/fr-FR/Kering?source=LinkedIn_Slots
https://jobs.moncler.com/search/?createNewAlert=false&q=&locationsearch=
https://orange.jobs/jobs/search.do?keyword=
https://pernodricard.wd3.myworkdayjobs.com/fr-FR/pernod-ricard
https://renault.referrals.selectminds.com/
https://hris-suez.csod.com/ats/careersite/search.aspx?site=8&c=hris-suez&sid=%5e%5e%5eHJe5gko1mldbDMyZ8oI9Lw%3d%3d
https://careers.hr.technipfmc.com
https://krb-sjobs.brassring.com/TGnewUI/Search/Home/Home?partnerid=30080&siteid=6559#home
https://career012.successfactors.eu/career?company=VALLOUREC&site=VjItcmY2YVFFcnJMYWhIb3RmMzhTYU9Ldz09
https://emplois.vinci.com/recherche-d%27offres
https://www.nestle.fr/jobs/search-jobs?keyword=&country=FR&location=&career_area=All&company=All
https://pfizer.wd1.myworkdayjobs.com/PfizerCareers/5/refreshFacet/318c8bb6f553100021d223d9780d30be
https://careers.faurecia.com/search/?createNewAlert=false&q=&locationsearch=france&optionsFacetsDD_customfield3=&optionsFacetsDD_country=&optionsFacetsDD_shifttype=Unlimited
https://www.emploi.sncf.com/nos-offres/contrat/577-578/localisation/40629/
https://www.smcp.com/fr/talents/offres-d-emploi/?keywords=&geographicalLocation=22&offerCountry=79&offerRegion=&organisation=&offerFamilyCategory=&contractType=&experienceLevel=
https://jobs.groupe-psa.com/offre-de-emploi/liste-offres.aspx?mode=layer&lcid=1036&facet_JobDescription_Contract=577
*/


/*

# ---------------------------
#     Rework Zone
# ---------------------------

async function scrapSodern() {
    const page_url = 'https://www.sodern.com/website/fr/ref/Carrières_262.html'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('table tbody tr').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('td.srJobListJobTitle').text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('a')).attr('href');
        offers.company = "Sodern";
        offers.function = "N/A";
        offers.details = "N/A";

        console.log(offers);
        console.log("L'Oreal : " + i);
    });
};
*/