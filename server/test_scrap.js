const puppeteer = require('puppeteer')

const getData = async () => {
  // 1 - Créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  // 2 - Naviguer jusqu'à l'URL cible
  await page.goto('https://arianegroup.wd3.myworkdayjobs.com/EXTERNALALL')
  await page.waitFor(5000) // fait une pause d'une seconde

  // 3 - Récupérer les données
  const result = await page.$$(() => {
    var title = document.querySelectorAll(".WB5F");
    //let location = document.querySelectorAll('.jobProperty.position3').innerText
    //return { title } //, location
    return title
  })

  // 4 - Retourner les données (et fermer le navigateur)
  browser.close()
  return result
  //console.log(result)
}

// Appelle la fonction getData() et affichage les données retournées
getData().then(value => {
  console.log(value)
})