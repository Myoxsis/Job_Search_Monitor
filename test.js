const axios = require("axios");
const cheerio = require("cheerio");
const idx = require("./OfferModel");

/* Add Engie Scrap // Not working yet
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
        offers.link = $element.find($('a.ts-offer-list-item__title-link')).attr('href');
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

//idx.resetDatabase();

scrapRichemont();
scrapDassaultAviation();
scrapAirFrance();
scrapEngie(); // Not working yet
scrapFramatome();
scrapHermes();
scrapSanofi();
scrapAlstom();
scrapNexter();
