import React from "react";
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

const OfferBox = ({offers, loading}) => {
    if (loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <div className='divOffer'>
            {offers.map(offer => (
                <div className="offerBox" key={offer.id}>
                <div className="offerItem">
                    <div className="offerCompany">
                    <div className="offerCompanyImg">{/*this.logoImg*/ offer.company}</div>
                    </div>
                    <div className="offerDescription">
                    <div className="offerName">{offer.name} </div>
                    <div className="offerLink"><a href={offer.link} target="_blank">Lien</a></div>
                    </div>
                    <div className="buttonContainer">
                    <button className="xButton">✔️</button>
                    <button className="ackButton">🖤</button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
};

export default OfferBox;

/*



cleanDesc () {
        var description = this.state.desc.split(',')[0]
        description = description.split('Published')[0]
        this.setState({desc : description})
      }

      displayCompanyLogo () {
        if (this.props.company === 'Safran') {
            var logoImg = <img src={safranLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === 'LVMH') {
            var logoImg = <img src={lvmhLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === 'Dassault Aviation') {
            var logoImg = <img src={dassaultAviationLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === 'Alstom') {
            var logoImg = <img src={alstomLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === 'Naval Group') {
            var logoImg = <img src={navalGroupLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === 'Sanofi') {
            var logoImg = <img src={sanofiLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === 'RATP Dev') {
            var logoImg = <img src={ratpDevLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "L'Oreal") {
            var logoImg = <img src={lorealLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "EDF") {
            var logoImg = <img src={edfLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "MBDA") {
            var logoImg = <img src={mbdaLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Fnac Darty") {
            var logoImg = <img src={fnacDartyLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Framatome") {
            var logoImg = <img src={framatomeLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Hermes") {
            var logoImg = <img src={hermesLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Nexter") {
            var logoImg = <img src={nexterLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Motul") {
            var logoImg = <img src={motulLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Thales") {
            var logoImg = <img src={thalesLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Van Cleef & Arpels") {
            var logoImg = <img src={vanCleefArpelsLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Engie") {
            var logoImg = <img src={engieLogo} alt={this.props.company}></img>;
        }
        else if (this.props.company === "Lisi Aerospace") {
            var logoImg = <img src={lisiAeroLogo} alt={this.props.company}></img>;
        }
        else {
            var logoImg = this.props.company;
        };
      }

*/