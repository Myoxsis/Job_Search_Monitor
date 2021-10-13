import React from "react";
import StarRating from '../StarRating';


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
import saintGobainLogo from './img/saint-gobain.png';
import airbusLogo from './img/airbus.png';
import psaLogo from './img/psa.png';
import claudiePierlotLogo from './img/claudiepierlot.png';
import sandroLogo from './img/sandro.png';
import majeLogo from './img/maje.png';
import deFursacLogo from './img/defursac.jpeg';
import smcpLogo from './img/smcp.jpeg';

const OfferBox = ({offers, loading}) => {

    function cleanDesc (offer) {
        var description = offer.split(',')[0]
        description = description.split('Published')[0]
        return description
    }

    if (loading) {
        return <h2>Loading ...</h2>
    }

    function displayCompanyLogo (company) {
        if (company === 'Safran') {
            return <img src={safranLogo} alt={company}></img>;
        }
        else if (company === 'LVMH') {
            return <img src={lvmhLogo} alt={company}></img>;
        }
        else if (company === 'Dassault Aviation') {
            return <img src={dassaultAviationLogo} alt={company}></img>;
        }
        else if (company === 'Alstom') {
            return <img src={alstomLogo} alt={company}></img>;
        }
        else if (company === 'Naval Group') {
            return <img src={navalGroupLogo} alt={company}></img>;
        }
        else if (company === 'Sanofi') {
            return <img src={sanofiLogo} alt={company}></img>;
        }
        else if (company === 'RATP Dev') {
            return <img src={ratpDevLogo} alt={company}></img>;
        }
        else if (company === "L'Oreal") {
            return <img src={lorealLogo} alt={company}></img>;
        }
        else if (company === "EDF") {
            return <img src={edfLogo} alt={company}></img>;
        }
        else if (company === "MBDA") {
            return <img src={mbdaLogo} alt={company}></img>;
        }
        else if (company === "Fnac Darty") {
            return <img src={fnacDartyLogo} alt={company}></img>;
        }
        else if (company === "Framatome") {
            return <img src={framatomeLogo} alt={company}></img>;
        }
        else if (company === "Hermes") {
            return <img src={hermesLogo} alt={company}></img>;
        }
        else if (company === "Nexter") {
            return <img src={nexterLogo} alt={company}></img>;
        }
        else if (company === "Motul") {
            return <img src={motulLogo} alt={company}></img>;
        }
        else if (company === "Thales") {
            return <img src={thalesLogo} alt={company}></img>;
        }
        else if (company === "Van Cleef & Arpels") {
            return <img src={vanCleefArpelsLogo} alt={company}></img>;
        }
        else if (company === "Engie") {
            return <img src={engieLogo} alt={company}></img>;
        }
        else if (company === "Lisi Aerospace") {
            return <img src={lisiAeroLogo} alt={company}></img>;
        }
        else if (company === "Saint Gobain") {
            return <img src={saintGobainLogo} alt={company}></img>;
        }
        else if (company === "Airbus") {
            return <img src={airbusLogo} alt={company}></img>;
        }
        else if (company === "PSA") {
            return <img src={psaLogo} alt={company}></img>;
        }
        else if (company === "Claudie Pierlot") {
            return <img src={claudiePierlotLogo} alt={company}></img>;
        }
        else if (company === "Sandro") {
            return <img src={sandroLogo} alt={company}></img>;
        }
        else if (company === "Maje") {
            return <img src={majeLogo} alt={company}></img>;
        }
        else if (company === "De Fursac") {
            return <img src={deFursacLogo} alt={company}></img>;
        }
        else if (company === "SMCP") {
            return <img src={smcpLogo} alt={company}></img>;
        }
        else {
            return company;
        };
    }

    return (
        <div className='divOffer'>

            <tr id="first_row" style={{height: "75px", verticalAlign: "middle"}}>
            <th style={{width: "15%"}}>Company</th>
            <th style={{width: "25%"}}>Description</th>
            <th style={{width: "15%"}}>Lien</th>
            <th style={{width: "5%"}}>Mark</th>
            <th style={{width: "10%"}}>Seen</th>
            <th style={{width: "10%"}}>Like</th>
            </tr>

            {offers.map(offer => (
                <tr className="offer_Box" key={offer.id} style={{height: "75px", boxShadow: "0 1px 0 rgb(120, 196, 231) inset"}}>
                        <td className="offerCompany">
                        <div className="offerCompanyImg" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{displayCompanyLogo(offer.company)}</div>
                        </td>
                        <td className="offerName">{cleanDesc(offer.name)} </td>
                        <td className="offerLink"><a href={offer.link} target="_blank" rel="noreferrer">Details</a></td>   
                        <td> <StarRating value={offer.grade} /> </td>                 
                        <td><button className="xButton">✔️</button></td>
                        <td><button className="ackButton">🖤</button></td>
                        
                </tr>
            ))}
        </div>
    );
};

export default OfferBox;