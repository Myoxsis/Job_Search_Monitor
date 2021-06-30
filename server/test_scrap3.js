const puppeteer = require('puppeteer');
//const { values } = require('sequelize/types/lib/operators');

// This is where we'll put the code to get around the tests.

const getDataArianeGroup = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://arianegroup.wd3.myworkdayjobs.com/EXTERNALALL')
  await page.waitForSelector(".WB5F")
  const target = await page.evaluate(function getUrls() {
    return Array.from(document.querySelectorAll('.WB5F').values()).
      map(el => el.innerText);
  });
  browser.close()
  return {target}
}

getDataArianeGroup().then(value => {
    const desc = value;
    console.log(desc);
})
