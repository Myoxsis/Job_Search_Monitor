const axios = require("axios");
const cheerio = require("cheerio");
const { colors } = require("prompt");
const idx = require("./OfferModel");

/*
    - Daher not working / Complex hierarchy and automated page
    - Add Engie Scrap // Not working yet
*/

async function scrapMotul() {
    const page_url = 'https://motul-recrute.talent-soft.com/job/list-of-jobs.aspx?mode=list'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('li.ts-offer-list-item.offerlist-item').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://motul-recrute.talent-soft.com" + $element.find('h3').find('a').attr('href'));
        offers.company = "Motul";
        offers.function = "N/A";
        offers.details = $element.find('ul.ts-offer-list-item__description').find('li').map((i, el) => {
            return $(el).text();
          }).get().join(' /*/ ').replace(/\s\s+/g, ' ').trim();
         
        list_offers.push(offers);
    });
    for (var i = 0; i < list_offers.length; i++) {
        console.log(list_offers[i].link);
        const { data } = await axios.get(list_offers[i].link);
        const $ = cheerio.load(data);

        list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();

        console.log("Motul : " + i);
        //idx.add_to_db(list_offers[i]);
        console.log(list_offers[i]);
    }
};

async function scrapSaintGobain() {
    const page_url = 'https://joinus.saint-gobain.com/fr?country=FR&region[]=106&region[]=361&region[]=421&type[]=38&type[]=41&function[]=63&function[]=57&function[]=64&search='
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('div.views-row').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('span.field.field--name-title.field--type-string.field--label-hidden').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://joinus.saint-gobain.com" + $element.find('a').attr('href'));
        offers.company = "Saint Gobain";
        offers.function = "N/A";
        offers.details = ($element.find('span.ref').text().replace(/\s\s+/g, ' ').trim() + " /*/ "
         + $element.find('div.field__item').text().replace(/\s\s+/g, ' ').trim());
         
        console.log(offers);
        console.log("Saint Gobain : " + i);
        idx.add_to_db(offers);
    });
};

scrapMotul();

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