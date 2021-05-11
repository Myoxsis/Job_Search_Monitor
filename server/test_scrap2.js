const puppeteer = require('puppeteer');

(async () => {
  // 1 - Créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 2 - Naviguer jusqu'à l'URL cible
  await page.goto('https://krb-sjobs.brassring.com/TGnewUI/Search/Home/Home?partnerid=30080&siteid=6559#keyWordSearch=');
  await page.waitFor(2000); // fait une pause d'une seconde
  await page.click(
    '#searchControls_BUTTON_2 > span.ladda-label',
  );
  await page.waitFor(4000); // fait une pause d'une seconde

  // 3 - Récupérer les données
  const result = await page.evaluate(() => {
    let title = document.querySelectorAll(".jobtitle")
    let location = document.querySelectorAll('.jobProperty.position3')
    return { title, location };
  });

  // 4 - Retourner les données (et fermer le navigateur)
  //return result;
  console.log(result);
  await browser.close();

})();



const puppeteer = require('puppeteer');

// This is where we'll put the code to get around the tests.
const preparePageForTests = async (page) => {

  // Pass the User-Agent Test.
  const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +
    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
  await page.setUserAgent(userAgent);
  }
  

(async () => {
    const browser = await puppeteer.launch(); //{ headless: true }
    const page = await browser.newPage();
    await preparePageForTests(page);

await page.goto('https://arianegroup.wd3.myworkdayjobs.com/EXTERNALALL');

await page.waitForSelector('.WB5F');

const textContent = await page.evaluate(() => {
   return document.querySelector('.WB5F');
});

console.log(textContent); 

//browser.close();
})();