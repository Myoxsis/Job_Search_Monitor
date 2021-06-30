const puppeteer = require('puppeteer');
//const { values } = require('sequelize/types/lib/operators');

// This is where we'll put the code to get around the tests.

const getDataArianeGroup = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://arianegroup.wd3.myworkdayjobs.com/EXTERNALALL')
  await page.waitForSelector(".WB5F")
  const links = await page.evaluate(function getUrls() {
    return Array.from(document.querySelectorAll('.WB5F').values()).
      map(el => el.innerText);
  });
  browser.close()
  return {links}
}

const getDataKering = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://kering.wd3.myworkdayjobs.com/fr-FR/Kering')
  await page.waitForSelector(".WB5F")
  const links = await page.evaluate(function getUrls() {
    return Array.from(document.querySelectorAll('.WB5F').values()).
      map(el => el.innerText);
  });
  browser.close()
  return {links}
}

const getDataChanel = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://cc.wd3.myworkdayjobs.com/en-US/ChanelCareers')
  await page.waitForSelector(".WB5F")
  const links = await page.evaluate(function getUrls() {
    return Array.from(document.querySelectorAll('.WB5F').values()).
      map(el => el.innerText);
  });
  browser.close()
  return {links}
}

const getDataPernodRicard = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://pernodricard.wd3.myworkdayjobs.com/fr-FR/pernod-ricard')
  await page.waitForSelector(".WB5F")
  const links = await page.evaluate(function getUrls() {
    return Array.from(document.querySelectorAll('.WIWY').values()).
      map(el => el.innerText);
  });
  browser.close()
  return {links}
}

// Appelle la fonction getData() et affichage les données retournées

getDataArianeGroup().then(value => {
  const head_offer = value.split('|')[0];
  console.log(head_offer)
})
getDataKering().then(value => {
  console.log(value)
})
getDataChanel().then(value => {
  console.log(value)
})
getDataPernodRicard().then(value => {
  console.log(value)
})

//https://imerys.wd3.myworkdayjobs.com/en-US/IMERYS-Careers?source=Linkedin