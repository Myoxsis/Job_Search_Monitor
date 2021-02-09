import React, { useEffect, useState } from 'react';
import { listAllOffers } from './API';
// import Modal from "./Components/Modal";
import OfferBox from "./Components/OfferBox";
import Clock from "./Components/Clock";
import useOfferSearch from './useOfferSearch';

const App = () => {
  //const [ offersList, setOffersList] = useState([]);

  const [ query, setQuery ] = useState([])
  const [ pageNumber, setPageNumber] = useState(1)

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }


  const {
    loading,
    offers,
    hasMore,
    error
  } = useOfferSearch(query, pageNumber)
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

  

  //useEffect(() => {
    //(async () => {
      //const offersList = await listAllOffers();
      //var showModal = await false;
      // eslint-disable-next-line
      //setOffersList(offersList);
      //setShowModal(showModal);
      //console.log(offersList);
    //})();
  //}, []);
  
/*
<div>
              <Modal show={this.state.show}/>
              <button  onClick={e => {this.showModal();}}> show Modal </button>
        </div>

*/

/*
<div className="divOffer">
        {offersList.map(entry => {
          return (
          <div>
            <OfferBox company={entry.company} name={entry.name} link={entry.link} />
          </div>
          )
        })}
        </div>

*/

  return (
    <div className="App">
      <Clock />
      <header className="App-header">
        <h2>Job Monitoring</h2>

        <div>
          <input type='text' onChange={handleSearch}></input>
        </div>
        
          {offers.map(offer => {
            return <div key={offer}>{offer}</div>
          })}
          <div>{loading && 'Loading ...'}</div>
          <div>{error && 'Error ...'}</div>
        
        
      </header>
    </div>
  );
}

export default App;
