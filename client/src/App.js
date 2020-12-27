import React, { useEffect, useState } from 'react';
import { listAllOffers } from './API';
import safranLogo from './img/safran.png';
import lvmhLogo from './img/lvmh.png';
import dassaultAviationLogo from './img/dassaultAviation.png';
import alstomLogo from './img/alstom.png';
import sanofiLogo from './img/sanofi.png';
import navalGroupLogo from './img/navalGroup.png';
import ratpDevLogo from './img/ratpDev.png';
import lorealLogo from './img/loreal.png';
import edfLogo from './img/edf.png';
import mbdaLogo from './img/mbda.png';
import fnacDartyLogo from './img/fnacDarty.png';
import framatomeLogo from './img/framatome.png';
import hermesLogo from './img/hermes.png';
import nexterLogo from './img/nexter.png';
import motulLogo from './img/motul.png';
import thalesLogo from './img/thales.png';
import vanCleefArpelsLogo from './img/vc&a.png';
import engieLogo from './img/engie.png';
import lisiAeroLogo from './img/lisiAero.png';

const App = () => {
  const [ offersList, setOffersList] = useState([]);
  useEffect(() => {
    (async () => {
      const offersList = await listAllOffers();
      // eslint-disable-next-line
      setOffersList(offersList);
      console.log(offersList);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Job Monitoring</h2>
        <div className="divOffer">
        {offersList.map(entry => {
          var description = entry.name.split(',')[0];
          var description = description.split('Published')[0];

          if (entry.company === 'Safran') {
            var logoImg = <img src={safranLogo} alt={entry.company}></img>;
          }
          else if (entry.company === 'LVMH') {
            var logoImg = <img src={lvmhLogo} alt={entry.company}></img>;
          }
          else if (entry.company === 'Dassault Aviation') {
            var logoImg = <img src={dassaultAviationLogo} alt={entry.company}></img>;
          }
          else if (entry.company === 'Alstom') {
            var logoImg = <img src={alstomLogo} alt={entry.company}></img>;
          }
          else if (entry.company === 'Naval Group') {
            var logoImg = <img src={navalGroupLogo} alt={entry.company}></img>;
          }
          else if (entry.company === 'Sanofi') {
            var logoImg = <img src={sanofiLogo} alt={entry.company}></img>;
          }
          else if (entry.company === 'RATP Dev') {
            var logoImg = <img src={ratpDevLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "L'Oreal") {
            var logoImg = <img src={lorealLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "EDF") {
            var logoImg = <img src={edfLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "MBDA") {
            var logoImg = <img src={mbdaLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Fnac Darty") {
            var logoImg = <img src={fnacDartyLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Framatome") {
            var logoImg = <img src={framatomeLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Hermes") {
            var logoImg = <img src={hermesLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Nexter") {
            var logoImg = <img src={nexterLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Motul") {
            var logoImg = <img src={motulLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Thales") {
            var logoImg = <img src={thalesLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Van Cleef & Arpels") {
            var logoImg = <img src={vanCleefArpelsLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Engie") {
            var logoImg = <img src={engieLogo} alt={entry.company}></img>;
          }
          else if (entry.company === "Lisi Aerospace") {
            var logoImg = <img src={lisiAeroLogo} alt={entry.company}></img>;
          }
          else {
            var logoImg = entry.company;
          }

          return (
            <div className="offerBox">
              <div className="offerItem">
                <div className="offerCompany">
                  <div className="offerCompanyImg">{logoImg}</div>
                </div>
                <div className="offerDescription">
                  <div className="offerName">{description} </div>
                  <div className="offerLink"><a href={entry.link} target="_blank">Lien</a></div>
                </div>
                <div className="buttonContainer">
                  <button className="xButton">✔️</button>
                  <button className="ackButton">🖤</button>
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </header>
    </div>
  );
}

export default App;
