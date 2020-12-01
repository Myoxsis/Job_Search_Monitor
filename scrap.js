const axios = require("axios");
const cheerio = require("cheerio");
const { colors } = require("prompt");
const idx = require("./OfferModel");

/*
    - Daher not working / Complex hierarchy and automated page
*/

// Add Engie Scrap // Not working yet

async function scrapRichemont() {
    const page_url = 'https://jobs.richemont.com/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_facility=&optionsFacetsDD_country=FR&optionsFacetsDD_department=&optionsFacetsDD_shifttype=&optionsFacetsDD_customfield5=&optionsFacetsDD_customfield4='
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('#searchresults tbody tr').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('.jobTitle')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://jobs.richemont.com" + $element.find($('.jobTitle')).find('a').attr('href'));
        offers.company = $element.find($('.colFacility')).text().replace(/\s\s+/g, ' ').trim();
        offers.function = $element.find($('.colDepartment')).text().replace(/\s\s+/g, ' ').trim();
        offers.details = $element.find($('.colLocation')).text().replace(/\s\s+/g, ' ').trim();

        console.log("Richemont : " + i);
        //idx.isIdUnique(offers)
        //    .then(isUnique => {
        //        if (!isUnique) {
        //            console.log('Not Added : Already exists in database');
        //        }
        //        else {
        //            if (offers.name.toLowerCase().search(stage|alternance) == true){ console.log("Stage or Alternance");}
        //            else { console.log("Added to db")}
        //            //idx.createOffer(offers);
        //        }
        //    })
        //    .catch(error => {
        //        console.error(error);
        //    });
        if (offers.name.toLowerCase().search(/(stage|alternance)/g) > -1){
             console.log("Stage or Alternance");
        }
        else { 
            console.log("Added to db");
        }
        });
        
};

scrapRichemont();

/*
https://www.airliquide.com/fr/carrieres/offres-emploi #not working yet
https://cc.wd3.myworkdayjobs.com/fr-FR/ChanelCareers
https://jobs.danone.com/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_country=FR&optionsFacetsDD_facility=&optionsFacetsDD_department=Experienced+professionals
https://careers.3ds.com/jobs?woc=%7B%22country%22%3A%5B%22country%2Ffrance%22%5D%7D&wocset=6
http://careers.disneylandparis.com/en/management-business/supply-chain-procurement
https://www.place-emploi-public.gouv.fr
https://jobs.gecareers.com/global/en/search-results
https://www.invivo-group.com/fr/nos-offres
https://kering.wd3.myworkdayjobs.com/fr-FR/Kering?source=LinkedIn_Slots
https://careers.loreal.com/en_US/jobs/SearchJobs/
https://www.lisi-aerospace.com/en/join-us/careers/
https://jobs.moncler.com/search/?createNewAlert=false&q=&locationsearch=
https://www.naval-group.com/fr/nous-rejoindre-85?keywords=&offerFamilyCategory=&contractType=&country=&city=&op=Rechercher&form_build_id=form-NzrJ7AsvKwvEKPwLDA2P5Qu6e3T6EKUpkTDoHGZS6Is&form_id=talent_soft_offers_filters_form#offer-list-content
https://orange.jobs/jobs/search.do?keyword=
https://pernodricard.wd3.myworkdayjobs.com/fr-FR/pernod-ricard
https://jobs.groupe-psa.com/offre-de-emploi/liste-offres.aspx?mode=layer&lcid=1036&facet_JobDescription_Contract=577
https://renault.referrals.selectminds.com/
https://hris-suez.csod.com/ats/careersite/search.aspx?site=8&c=hris-suez&sid=%5e%5e%5eHJe5gko1mldbDMyZ8oI9Lw%3d%3d
https://careers.hr.technipfmc.com
https://krb-sjobs.brassring.com/TGnewUI/Search/Home/Home?partnerid=30080&siteid=6559#home
https://career012.successfactors.eu/career?company=VALLOUREC&site=VjItcmY2YVFFcnJMYWhIb3RmMzhTYU9Ldz09
https://emplois.vinci.com/recherche-d%27offres
https://www.nestle.fr/jobs/search-jobs?keyword=&country=FR&location=&career_area=All&company=All
https://www.smcp.com/fr/talents/offres-d-emploi/?keywords=&geographicalLocation=22&offerCountry=79&offerRegion=&organisation=&offerFamilyCategory=&contractType=&experienceLevel=
https://pfizer.wd1.myworkdayjobs.com/PfizerCareers/5/refreshFacet/318c8bb6f553100021d223d9780d30be
https://careers.faurecia.com/search/?createNewAlert=false&q=&locationsearch=france&optionsFacetsDD_customfield3=&optionsFacetsDD_country=&optionsFacetsDD_shifttype=Unlimited
https://www.emploi.sncf.com/nos-offres/contrat/577-578/localisation/40629/
https://careers.ratpdev.com/offre-de-emploi/liste-offres.aspx?page=3&LCID=1036
https://arianegroup.wd3.myworkdayjobs.com/EXTERNALALL
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