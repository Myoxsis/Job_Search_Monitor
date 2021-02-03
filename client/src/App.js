import React, { useEffect, useState } from 'react';
import { listAllOffers } from './API';
// import Modal from "./Components/Modal";
import OfferBox from "./Components/OfferBox";
import Clock from "./Components/Clock";

const App = () => {
  const [ offersList, setOffersList] = useState([]);

  /*
  state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: true
        });
      };
  */

  useEffect(() => {
    (async () => {
      const offersList = await listAllOffers();
      //var showModal = await false;
      // eslint-disable-next-line
      setOffersList(offersList);
      //setShowModal(showModal);
      console.log(offersList);
    })();
  }, []);
  
/*
<div>
              <Modal show={this.state.show}/>
              <button  onClick={e => {this.showModal();}}> show Modal </button>
        </div>

*/

  return (
    <div className="App">
      <Clock />
      <header className="App-header">
        <h2>Job Monitoring</h2>
        
        <div className="divOffer">
        {offersList.map(entry => {
          return (
          <div>
            <OfferBox company={entry.company} name={entry.name} link={entry.link} />
          </div>
          )
        })}
        </div>
      </header>
    </div>
  );
}

export default App;
