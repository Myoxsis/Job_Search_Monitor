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