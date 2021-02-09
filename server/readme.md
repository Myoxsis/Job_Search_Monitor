# Job Search Monitor
## WorkFlow
    [] index.js -> Define database and connections
    [] OfferModel.js -> Define the Model for the Offer Table
    [] scrap.js -> dev file to test a scrapper while building
    [] scrappers.js -> Collections of all scrappers and main function : scrapAll()
    [] main.js -> running file with 2 options : run Mode or Punctual running

## To-do
    [X] Shift all scrapper to CDI and CDD only when possible
    [] Finish the list of scrapper with the links in scrap.js
    [X] create a function to look for "stage or intern or trainee" and prevent to add to database
    [] Create a component for the job offer display
    [] Build the front-end
        [x] React App
        [] If hot&skilled, electron app
    [] Add notification system

    [] Daher not working / Complex hierarchy and automated page
    [] Add Engie Scrap // Not working yet

## Notes
    28/12/2020 : Update of all MDs of the project.
    14/01/2021 : Added the folder offer/todat for the offer of the day. But some work is needed on the timestamps. (Not 100% accurate yet)
    03/02/2021 : Added Airbus Scrapper.
    09/02/2021 : Added new scrappers : SMCP, PSA. Started Sodern Scrapper, missing the Desc field extract. 
    
## Site TBD
    https://www.airliquide.com/fr/carrieres/offres-emploi #not working yet
    https://jobs.danone.com/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_country=FR&optionsFacetsDD_facility=&optionsFacetsDD_department=Experienced+professionals
    https://careers.3ds.com/jobs?woc=%7B%22country%22%3A%5B%22country%2Ffrance%22%5D%7D&wocset=6
    http://careers.disneylandparis.com/en/management-business/supply-chain-procurement
    https://www.place-emploi-public.gouv.fr
    https://jobs.gecareers.com/global/en/search-results
    https://www.invivo-group.com/fr/nos-offres
    https://jobs.moncler.com/search/?createNewAlert=false&q=&locationsearch=
    https://orange.jobs/jobs/search.do?keyword=
    https://renault.referrals.selectminds.com/
    https://hris-suez.csod.com/ats/careersite/search.aspx?site=8&c=hris-suez&sid=%5e%5e%5eHJe5gko1mldbDMyZ8oI9Lw%3d%3d
    https://careers.hr.technipfmc.com
    https://krb-sjobs.brassring.com/TGnewUI/Search/Home/Home?partnerid=30080&siteid=6559#home #Total : Not working no hardcoded html
    https://career012.successfactors.eu/career?company=VALLOUREC&site=VjItcmY2YVFFcnJMYWhIb3RmMzhTYU9Ldz09
    https://emplois.vinci.com/recherche-d%27offres
    https://www.nestle.fr/jobs/search-jobs?keyword=&country=FR&location=&career_area=All&company=All
    https://careers.faurecia.com/search/?createNewAlert=false&q=&locationsearch=france&optionsFacetsDD_customfield3=&optionsFacetsDD_country=&optionsFacetsDD_shifttype=Unlimited
    https://www.emploi.sncf.com/nos-offres/contrat/577-578/localisation/40629/
    https://jobs.groupe-psa.com/offre-de-emploi/liste-offres.aspx?mode=layer&lcid=1036&facet_JobDescription_Contract=577


    Workday Website :
    https://cc.wd3.myworkdayjobs.com/fr-FR/ChanelCareers
    https://kering.wd3.myworkdayjobs.com/fr-FR/Kering?source=LinkedIn_Slots
    https://pfizer.wd1.myworkdayjobs.com/PfizerCareers/5/refreshFacet/318c8bb6f553100021d223d9780d30be
    https://pernodricard.wd3.myworkdayjobs.com/fr-FR/pernod-ricard