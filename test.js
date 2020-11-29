const axios = require("axios");
const cheerio = require("cheerio");
const idx = require("./OfferModel");

/* 
Add ArianeGroup Scrap // Not Working yet (Workday)
Add Daher Scrap // Worrkday so not working yet

Working :
Alstom : ok

 */

async function scrapRichemont() {
    const page_url = 'https://jobs.richemont.com/search/?q=&sortColumn=referencedate&sortDirection=desc&optionsFacetsDD_country=FR&startrow=1'
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

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
        
    });
};

async function scrapDassaultAviation() {
    const page_url = 'https://carriere.dassault-aviation.com/offre-de-emploi/liste-offres.aspx?page=1&LCID=1036'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('li.ts-offer-list-item').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://carriere.dassault-aviation.com" + $element.find($('.ts-offer-list-item__title-link')).attr('href'));
        offers.company = "Dassault Aviation";
        offers.function = "N/A";
        offers.details = "";

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
};

async function scrapAirFrance() {
    const page_url = 'https://recrutement.airfrance.com/offre-de-emploi/liste-offres.aspx';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('li.ts-offer-list-item.offerlist-item').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3').find('a').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://recrutement.airfrance.com/offre-de-emploi/liste-offres.aspx" + $element.find($('a')).attr('href'));
        offers.company = "Air France";
        offers.function = "";
        offers.details = $element.find('ul.ts-offer-list-item__description').map((i, el) => {
            return $(el + " ").text();
          }).get().join('');

        //console.log(offers);
        console.log("Air France : " + i)
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
    console.log("Total Air France : " + i)
};

async function scrapSanofi() {
    const page_url = 'https://fr.jobs.sanofi.com/recherche-d%27offres'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('.job-list').children('li').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.children('a').find('h2').text();
        offers.link = ("https://fr.jobs.sanofi.com" + $element.find('h2').parent('a').attr('href'));
        offers.company = "Sanofi";
        offers.function = "";
        offers.details = $element.children('a').find('.job-location').text();

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
    
};

async function scrapHermes() {
    const page_url = 'https://talents.hermes.com/fr/'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('div.card-block').each((i, element) => {
        
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('h2')).text();
        offers.link = ("https://talents.hermes.com" + $element.find($('a')).attr('href'));
        offers.company = "Hermes";
        offers.function = "N/A";
        offers.details = $element.find('ul.ts-offer-list-item__description').find('li').map((i, el) => {
            return $(el).text();
          }).get().join(' ');

        //console.log(offers);
        console.log("Hermes : " + i);
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
};

async function scrapFramatome() {
    const page_url = 'https://framatome-career.talent-soft.com/offre-de-emploi/liste-offres.aspx?page=1&LCID=1033'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('div.ts-offer-card').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('h3')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://framatome-career.talent-soft.com" + $element.find($('h3')).find($('a')).attr('href'));
        offers.company = "Framatome";
        offers.function = "N/A";
        offers.details = $element.find('ul.ts-offer-card-content__list').find('li').map((i, el) => {
            return $(el).text();
          }).get().join(' ');

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
};

async function scrapEngie() {
    const page_url = 'https://jobs.engie.com/jobs/search/76073636/page1'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('div.jlr_right_hldr').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('a.job_link.font_bold')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('a')).attr('href');
        offers.company = "Engie";
        offers.function = $element.find($('p.jlr_company')).text();
        offers.details = $element.find('p.jlr_cat_loc').map((i, el) => {
            return $(el).text().replace(/\s\s+/g, ' ').trim();
          }).get().join(' ');

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
};

async function scrapAlstom() {
    const page_url = 'https://jobsearch.alstom.com/search/?q=&sortColumn=referencedate&sortDirection=desc&startrow=1';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('tr.data-row').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('a.jobTitle-link')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('a.jobTitle-link')).attr('href');
        offers.company = "Alstom";
        offers.function = $element.find($('span.jobDepartment')).text();
        offers.details = ($element.find('span.jobLocation').text().replace(/\s\s+/g, ' ').trim() + $element.find('span.jobShifttype').text().replace(/\s\s+/g, ' ').trim() + $element.find('span.jobDate').text().replace(/\s\s+/g, ' ').trim());

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
};

async function scrapNexter() {
    const page_url = 'https://nexter-recrutement.profils.org/offre-de-emploi/liste-offres.aspx?page=1&LCID=1036';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('li.ts-offer-list-item.offerlist-item ').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('a.ts-offer-list-item__title-link')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://nexter-recrutement.profils.org" + $element.find($('a.ts-offer-list-item__title-link')).attr('href'));
        offers.company = "Nexter";
        offers.function = "N/A";
        offers.details = $element.find('ul.ts-offer-list-item__description').map((i, el) => {
            return $(el).text();
          }).get().join(' /*/ ');

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                    if (!isUnique) {
                        console.log('Not Added : Already exists in database');
                    }else {
                        idx.createOffer(offers);
                    }
            })
            .catch(error => {
                console.error(error);
            });

    });
};



async function scrapSafran() {
    const page_url = 'https://www.safran-group.com/jobs';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('li.item').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('a.offer-card')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('a.offer-card')).attr('href');
        offers.company = "Safran";
        offers.function = "N/A";
        offers.details = ($element.find($('span.date')).parent('a').text().replace(/\s\s+/g, ' ').trim() + $element.find('div.info-zone.zone-2').find('span').map((i, el) => {
            return $(el).text();
          }).get().join(' /*/ '));

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                    if (!isUnique) {
                        console.log('Not Added : Already exists in database');
                    }else {
                        idx.createOffer(offers);
                    }
            })
            .catch(error => {
                console.error(error);
            });

    });
};


//idx.resetDatabase();

scrapRichemont();
scrapDassaultAviation();
scrapAirFrance();
scrapEngie();
scrapFramatome();
scrapHermes();
scrapSanofi();
scrapAlstom();
scrapNexter();
scrapSafran();


/*

    - To be reworked because not working


async function scrapArianeGroup() {
    const page_url = 'https://arianegroup.wd3.myworkdayjobs.com/EXTERNALALL';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('li.WE2F.WMQO.WK5.WL3F').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('div.gwt-Label.WKDP.WDCP')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = "";
        offers.company = "ArianeGroup";
        offers.function = "N/A";
        offers.details = $element.find('span.gwt-InlineLabel.WI3F.WH2F');

        console.log(offers);
        idx.isIdUnique(offers)
            .then(isUnique => {
                    if (!isUnique) {
                        console.log('Not Added : Already exists in database');
                    }else {
                        idx.createOffer(offers);
                    }
            })
            .catch(error => {
                console.error(error);
            });

    });
};

async function scrapDaher() {
    // To be reviewed, nothing is extrated
    const page_url = 'https://wd3.myworkdaysite.com/recruiting/daher/Daher'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);

    $('#promptOption-gwt-uid-1').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('.gwt-Label WKDP WDCP');
        offers.link = "";
    //    offers.company = "Daher";
    //    offers.function = TBD;
    //    offers.details = TBD;

        console.log($element);
        idx.isIdUnique(offers)
            .then(isUnique => {
                if (!isUnique) {
                    console.log('Not Added : Already exists in database');
                    ;
                }
                else {
                    idx.createOffer(offers);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
};

*/

/*
https://www.airliquide.com/fr/carrieres/offres-emploi #not working yet
https://cc.wd3.myworkdayjobs.com/fr-FR/ChanelCareers
https://jobs.danone.com/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_country=FR&optionsFacetsDD_facility=&optionsFacetsDD_department=Experienced+professionals
https://careers.3ds.com/jobs?woc=%7B%22country%22%3A%5B%22country%2Ffrance%22%5D%7D&wocset=6
http://careers.disneylandparis.com/en/management-business/supply-chain-procurement
https://www.edf.fr/edf-recrute
https://recrutement.fnacdarty.com/accueil.aspx?LCID=1036
https://www.place-emploi-public.gouv.fr
https://jobs.gecareers.com/global/en/search-results
https://www.invivo-group.com/fr/nos-offres
https://kering.wd3.myworkdayjobs.com/fr-FR/Kering?source=LinkedIn_Slots
https://careers.loreal.com/en_US/jobs/SearchJobs/
https://www.lisi-aerospace.com/en/join-us/careers/
https://www.lvmh.fr/talents/nous-rejoindre/nos-offres/liste-des-offres/?job=&place=&experience=&activity=&contract=&reference=#gt_offers-results
https://www.mbda-systems.com/jobs/?gestmax%5Bvac_sector%5D=&gestmax%5Bvac_localisation%5D=001&gestmax%5Bvac_job_type%5D=
https://jobs.moncler.com/search/?createNewAlert=false&q=&locationsearch=
https://motul-recrute.talent-soft.com/job/list-of-jobs.aspx
https://www.naval-group.com/fr/nous-rejoindre-85?keywords=&offerFamilyCategory=&contractType=&country=&city=&op=Rechercher&form_build_id=form-NzrJ7AsvKwvEKPwLDA2P5Qu6e3T6EKUpkTDoHGZS6Is&form_id=talent_soft_offers_filters_form#offer-list-content
https://nexter-recrutement.profils.org/accueil.aspx?LCID=1036
https://orange.jobs/jobs/search.do?keyword=
https://pernodricard.wd3.myworkdayjobs.com/fr-FR/pernod-ricard
https://jobs.groupe-psa.com/offre-de-emploi/liste-offres.aspx?mode=layer&lcid=1036&facet_JobDescription_Contract=577
https://renault.referrals.selectminds.com/

https://joinus.saint-gobain.com/fr
https://www.sodern.com/website/fr/ref/Carrières_262.html
https://hris-suez.csod.com/ats/careersite/search.aspx?site=8&c=hris-suez&sid=%5e%5e%5eHJe5gko1mldbDMyZ8oI9Lw%3d%3d
https://careers.hr.technipfmc.com
https://emploi.thalesgroup.com/recherche-d%27offres
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