const puppeteer = require('puppeteer')

// This is where we'll put the code to get around the tests.
const preparePageForTests = async (page) => {

  // Pass the User-Agent Test.
  const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15';
  await page.setUserAgent(userAgent);
  }

const getData = async () => {
  // 1 - Créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  //await preparePageForTests(page);

  // 2 - Naviguer jusqu'à l'URL cible
  await page.goto('https://arianegroup.wd3.myworkdayjobs.com/EXTERNALALL')
  await page.waitForSelector(".WB5F") // fait une pause d'une seconde
  await page.screenshot({ path: "./screenshot.jpg", type: "jpeg", fullPage: true });

  // 3 - Récupérer les données
  const result = await page.evaluate(() => {
    
    var title = Array.from(document.querySelectorAll('.WB5F'));
    //let location = document.querySelectorAll('.jobProperty.position3').innerText
    //return { title } //, location
    return title
  })

  const links = await page.evaluate(function getUrls() {
    return Array.from(document.querySelectorAll('.WB5F').values()).
      map(el => el.innerHTML);
  });

  // 4 - Retourner les données (et fermer le navigateur)
  browser.close()
  return {result, links}
  //console.log(result)
}



// Appelle la fonction getData() et affichage les données retournées
getData().then(value => {
  console.log(value)
})
