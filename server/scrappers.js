const axios = require("axios");
const cheerio = require("cheerio");
const idx = require("./OfferModel");
const ora = require('ora');

/* 
Add ArianeGroup Scrap // Not Working yet (Workday)
Add Daher Scrap // Worrkday so not working yet
Add Sodern scrap not working yet // Smartrecruiters

Working :
Alstom : ok
 */

async function scrapRichemont() {
    const page_url = 'https://jobs.richemont.com/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_facility=&optionsFacetsDD_country=FR&optionsFacetsDD_department=&optionsFacetsDD_shifttype=&optionsFacetsDD_customfield5=&optionsFacetsDD_customfield4='
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('#searchresults tbody tr').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('.jobTitle')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://jobs.richemont.com" + $element.find($('.jobTitle')).find('a').attr('href'));
        offers.company = $element.find($('.colFacility')).text().replace(/\s\s+/g, ' ').trim();
        offers.function = $element.find($('.colDepartment')).text().replace(/\s\s+/g, ' ').trim();
        offers.details = $element.find($('.colLocation')).text().replace(/\s\s+/g, ' ').trim();

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Richemont\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const html = cheerio.load(data);
            list_offers[i].desc = html('.job').text().replace(/\s\s+/g, ' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapDassaultAviation() {
    const page_url = 'https://carriere.dassault-aviation.com/offre-de-emploi/liste-offres.aspx?page=1&LCID=1036'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('li.ts-offer-list-item').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://carriere.dassault-aviation.com" + $element.find($('.ts-offer-list-item__title-link')).attr('href'));
        offers.company = "Dassault Aviation";
        offers.function = "N/A";
        offers.details = "";

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Dassault Aviation\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapAirFrance() {
    const page_url = 'https://recrutement.airfrance.com/offre-de-emploi/liste-offres.aspx';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('li.ts-offer-list-item.offerlist-item').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3').find('a').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://recrutement.airfrance.com" + $element.find($('a')).attr('href'));
        offers.company = "Air France";
        offers.function = "N/A";
        offers.details = $element.find('ul.ts-offer-list-item__description').map((i, el) => {
            return $(el).text().trim();
          }).get().join('');

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Air France\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#contenu').text().replace(/\s\s+/g, ' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapSanofi() {
    const page_url = 'https://fr.jobs.sanofi.com/recherche-d%27offres'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('.job-list').children('li').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.children('a').find('h2').text();
        offers.link = ("https://fr.jobs.sanofi.com" + $element.find('h2').parent('a').attr('href'));
        offers.company = "Sanofi";
        offers.function = "";
        offers.details = $element.children('a').find('.job-location').text();

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Sanofi\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('.job-description').text().replace(/\s\s+/g, ' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapHermes() {
    const page_url = 'https://talents.hermes.com/fr/'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

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

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Hermes\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#detailOffer').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapFramatome() {
    const page_url = 'https://framatome-career.talent-soft.com/offre-de-emploi/liste-offres.aspx?page=1&LCID=1033'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

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

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Framatome\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapEngie() {
    const page_url = 'https://jobs.engie.com/jobs/search/76073636/page1'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

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
        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Engie\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#description_box').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapAlstom() {
    const page_url = 'https://jobsearch.alstom.com/search/?q=&sortColumn=referencedate&sortDirection=desc&startrow=1';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('tr.data-row').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find($('a.jobTitle-link')).text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://jobsearch.alstom.com" + $element.find($('a.jobTitle-link')).attr('href'));
        offers.company = "Alstom";
        offers.function = $element.find($('span.jobDepartment')).text();
        offers.details = ($element.find('span.jobLocation').text().replace(/\s\s+/g, ' ').trim() + $element.find('span.jobShifttype').text().replace(/\s\s+/g, ' ').trim() + $element.find('span.jobDate').text().replace(/\s\s+/g, ' ').trim());

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Alstom\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div.jobDisplay').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapNexter() {
    const page_url = 'https://nexter-recrutement.profils.org/offre-de-emploi/liste-offres.aspx?page=1&LCID=1036';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

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

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Nexter\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapSafran() {
    const page_url = 'https://www.safran-group.com/jobs';
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

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

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Safran\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#job-details').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapFnacDarty() {
    const page_url = 'https://recrutement.fnacdarty.com/offre-de-emploi/liste-offres.aspx?page=1&LCID=1036&mode=list'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('li.ts-offer-list-item.offerlist-item').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3').find('a').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://recrutement.fnacdarty.com" + $element.find($('a')).attr('href'));
        offers.company = "Fnac Darty";
        offers.function = "N/A";
        offers.details = $element.find('ul.ts-offer-list-item__description').map((i, el) => {
            return $(el).text();
          }).get().join(' /*/ ').replace(/\s\s+/g, ' ').trim();

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping FNAC Darty\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapMBDA() {
    const page_url = 'https://www.mbda-systems.com/jobs/?gestmax%5Bvac_sector%5D=&gestmax%5Bvac_localisation%5D=001&gestmax%5Bvac_job_type%5D='
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('table tbody tr').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('th').text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('a')).attr('href');
        offers.company = "MBDA";
        offers.function = "N/A";
        offers.details = $element.find('td').map((i, el) => {
            return $(el).text();
          }).get().join(' /*/ ').replace(/\s\s+/g, ' ').trim();

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping MBDA\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div.col-lg-10.col-lg-offset-1').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapLOREAL() {
    const page_url = 'https://careers.loreal.com/en_US/jobs/SearchJobs/?3_110_3=18022&3_33_3=134,133'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('article.article--result').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3.article__header__text__title').text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find($('a')).attr('href');
        offers.company = "L'Oreal";
        offers.function = "N/A";
        offers.details = $element.find('div.article__header__text__subtitle').find('span').map((i, el) => {
            return $(el).text();
          }).get().join(' /*/ ').replace(/\s\s+/g, ' ').trim();

          list_offers.push(offers);
    });
    const spinner = ora("Scrapping L'Oreal\n");
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div.column__item').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapEDF() {
    const page_url = 'https://www.edf.fr/edf-recrute/rejoignez-nous/voir-les-offres/nos-offres?search%5Blocation%5D=_TS_CO_Country_France&search%5BcurrentPath%5D=page_entity/345&search%5Bdiplome%5D=123'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('div.wrapper-offer').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3.offer-title').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://www.edf.fr" + $element.find($('a')).attr('href'));
        offers.company = "EDF";
        offers.function = "N/A";
        offers.details = ($element.find('div.offer-date').text() + ' /*/ ' + $element.find('li.offer-type').text() + " /*/ " + $element.find('li.offer-state').text());

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping EDF\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('section.job-posting').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapLVMH() {
    const page_url = 'https://www.lvmh.fr/talents/nous-rejoindre/nos-offres/liste-des-offres/?job=&place=&experience=&activity=&contract=&reference=#gt_offers-results'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('table tbody tr').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3').text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.find('h3').parent('a').attr('href');
        offers.company = "LVMH";
        offers.function = "N/A";
        offers.details = ($element.find('td.detail__h').text() + " /*/ " + $element.find('td.detail__h').prev('td').text());

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping LVMH\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div.inner.inner--app1pre1.inner--w').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

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
    const spinner = ora('Scrapping Motul\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapSaintGobain() {
    const page_url = 'https://joinus.saint-gobain.com/fr?country=FR&region[]=106&region[]=361&region[]=421&type[]=38&type[]=41&function[]=63&function[]=57&function[]=64&search='
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('div.row-offre').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('span.field.field--name-title.field--type-string.field--label-hidden').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://joinus.saint-gobain.com" + $element.find('a').attr('href'));
        offers.company = "Saint Gobain";
        offers.function = "N/A";
        offers.details = ($element.find('span.ref').text().replace(/\s\s+/g, ' ').trim() + " /*/ "
         + $element.find('div.field__item').text().replace(/\s\s+/g, ' ').trim());
         
         list_offers.push(offers);
    });
    const spinner = ora('Scrapping Saint Gobain\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div.node--type-job').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapThales() {
    const page_url = 'https://emploi.thalesgroup.com/recherche-d%27offres'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('section#applied-filters').next('ul').find('li').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h2').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://emploi.thalesgroup.com" + $element.find($('a')).attr('href'));
        offers.company = "Thales";
        offers.function = "N/A";
        offers.details = ($element.find('span.job-date-posted').text().replace(/\s\s+/g, ' ').trim() + " /*/ " + $element.find('span.job-location').text().replace(/\s\s+/g, ' ').trim());

        list_offers.push(offers);
    });
    const spinner = ora('Scrapping Thales\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('section.job-description').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapNavalGroup() {
    const page_url = 'https://www.naval-group.com/fr/nous-rejoindre-85?keywords=&offerFamilyCategory=&contractType=&country=79&city=&op=Rechercher&form_build_id=form-fIocKsmgflhM_Us7HcDb-_tjAsrVbZc13Sasq2el-sk&form_id=talent_soft_offers_filters_form&page=0'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('ul.list-type-a').find('li').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3.job-offer-item-title.title-h3').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://www.naval-group.com" + $element.find($('a')).attr('href'));
        offers.company = "Naval Group";
        offers.function = $element.find('p.job-offer-item-category').text().replace(/\s\s+/g, ' ').trim();
        offers.details = ($element.find('p.job-offer-item-category').text().replace(/\s\s+/g, ' ').trim() + " /*/ " + $element.find('ul.job-offer-item-info').text().replace(/\s\s+/g, ' ').trim());

        if (offers.name !== '') {
            list_offers.push(offers);
        }
    });
    const spinner = ora('Scrapping Naval Group\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div.job-offer').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapLisiAerospace() {
    const page_url = 'https://www.lisi-aerospace.com/en/join-us/careers/'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('div.row.no-gutters.table-stripped-body').find('a').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('div.col-10.col-sm:nth-child(5)').text().replace(/\s\s+/g, ' ').trim();
        offers.link = $element.attr('href');
        offers.company = "Lisi Aerospace";
        offers.function = $element.find('div.col-10.col-sm:nth-child(2)').text().replace(/\s\s+/g, ' ').trim();
        offers.details = ($element.find('div.col-10.col-sm:nth-child(1)').text().replace(/\s\s+/g, ' ').trim() + " /*/ " + $element.find('div.col-10.col-sm:nth-child(2)').text().replace(/\s\s+/g, ' ').trim() + " /*/ " + $element.find('div.col-10.col-sm:nth-child(3)').text().replace(/\s\s+/g, ' ').trim() + " /*/ " + $element.find('div.col-10.col-sm:nth-child(6)').text().replace(/\s\s+/g, ' ').trim() + ", " + $element.find('div.col-10.col-sm:nth-child(7)').text().replace(/\s\s+/g, ' ').trim());

        if (offers.name !== '') {
            list_offers.push(offers);
        }
    });
    const spinner = ora('Scrapping Lisi Aerospace\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div.job_description').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};

async function scrapRATPdev() {
    const page_url = 'https://careers.ratpdev.com/offre-de-emploi/liste-offres.aspx?page=1&LCID=1036'
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    var list_offers = [];

    $('ul.ts-related-offers__row').find('li').each((i, element) => {
        const $element = $(element);
        const offers = {};
        offers.name = $element.find('h3.ts-offer-list-item__title.styleh3').text().replace(/\s\s+/g, ' ').trim();
        offers.link = ("https://careers.ratpdev.com" + $element.find('a.ts-offer-list-item__title-link').attr('href'));
        offers.company = "RATP Dev";
        offers.function = $element.find('div.col-10.col-sm:nth-child(2)').text().replace(/\s\s+/g, ' ').trim();
        offers.details = $element.find('ul.ts-offer-list-item__description').find('li').map((i, el) => {
            return $(el).text();
          }).get().join(' /*/ ').replace(/\s\s+/g, ' ').trim();

        if (offers.name !== '') {
            list_offers.push(offers);
        }
    });
    const spinner = ora('Scrapping RATP Dev\n');
    spinner.start();
    for (var i = 0; i < list_offers.length; i++) {
        try{
            const { data } = await axios.get(list_offers[i].link);
            const $ = cheerio.load(data);
            list_offers[i].desc = $('div#detail_offre').text().replace(/\s\s+/g, ' ').replace('&lt;p&gt;', ' ').replace('&lt;/p&gt;', ' ').replace('&lt;/li&gt;', ' ').replace('&lt;li style="text-align: justify;"&gt;', ' ').replace('\t',' ').trim();
            idx.add_to_db(list_offers[i]);
        } catch(e) {
            console.log(e.message);
        }
    };
    spinner.succeed();
};


//idx.resetDatabase();
function scrapAll() {
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
    scrapFnacDarty();
    scrapThales();
    scrapMBDA();
    scrapLOREAL();
    scrapEDF();
    scrapLVMH();
    scrapMotul();
    scrapSaintGobain();
    scrapNavalGroup();
    scrapLisiAerospace();
    scrapRATPdev();
};


module.exports = {scrapAll};

/*
https://career2.successfactors.eu/career?company=esa&career%5fns=job%5flisting%5fsummary&navBarLevel=JOB%5fSEARCH&_s.crb=UdpZXzwfYS%2fNyvBo1UyYWY88Gpi1ny5OFMIIpJk6Ih0%3d
https://www.airliquide.com/fr/carrieres/offres-emploi #not working yet
https://cc.wd3.myworkdayjobs.com/fr-FR/ChanelCareers
https://jobs.danone.com/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_country=FR&optionsFacetsDD_facility=&optionsFacetsDD_department=Experienced+professionals
https://careers.3ds.com/jobs?woc=%7B%22country%22%3A%5B%22country%2Ffrance%22%5D%7D&wocset=6
http://careers.disneylandparis.com/en/management-business/supply-chain-procurement
https://www.edf.fr/edf-recrute
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