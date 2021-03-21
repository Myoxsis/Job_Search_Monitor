import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Modal from "./Components/Modal";
import OfferBox from "./Components/OfferBox";
import Pagination from './Components/Pagination';
import Clock from "./Components/Clock";
import Navigation from "./Components/Navigation";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from "./Pages/index";
import TodayOffer from "./Pages/today_offers";


const App = () => {

  return (
    <div className="App">
      <Clock />
      <header className="App-header">
        <h2>Job Monitoring</h2>

        <Router>
          <Navigation />

          <Route path="/" exact component={Index} />
          <Route path="/!#" exact component={Index} />
          <Route path="/Today" exact component={TodayOffer} />
          <Route path="/Today/!#" exact component={TodayOffer} />

        </Router>
    
      </header>
    </div>
  );
}

export default App;

/* 
<div>
          <select>
            {uniqueCompanies.map(uniqueCompany => (
              <option key={uniqueCompany.id} value={uniqueCompany.company}>
                {uniqueCompany.company}
              </option>
            ))}
          </select>
      </div>
*/

/*
<div>
          <input type='text' value={q} onChange={(e) => setQ(e.target.value)} className="searchBar" placeholder='Search ...'></input>
        </div>

        
        <OfferBox offers={offersToDisplay} loading={loading} />  
        <Pagination 
         offersPerPage={offersPerPage}
         totalOffers={currentOffers.length}
         paginate={paginate} />
*/