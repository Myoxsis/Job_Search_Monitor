const puppeteer = require('puppeteer');

const getDataTotal = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://krb-sjobs.brassring.com/TGnewUI/Search/Home/Home?partnerid=30080&siteid=6559#home')
  await page.waitForSelector(".job")
  const links = await page.evaluate(function getUrls() {
    return Array.from(document.querySelectorAll('.job').values()).
      map(el => el.querySelector('.jobtitle').innerHTML);
     //map(el => el.querySelectorAll('href'));
     // map(el => el.innerText);
  });
  browser.close()
  return {links}
}

getDataTotal().then(value => {
  console.log(value)
})