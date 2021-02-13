import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Modal from "./Components/Modal";
import OfferBox from "./Components/OfferBox";
import Pagination from './Components/Pagination';
import Clock from "./Components/Clock";

const App = () => {
  const [ offers, setOffers ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ offersPerPage ] = useState(25);
  const [q, setQ] = useState("");

  const API_URL = 'http://localhost:1337';

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      const res = await axios.get(`${API_URL}/offers`);
      setOffers(res.data);
      setLoading(false);
    }

    fetchOffers();
  }, []);

  function search(offers){
    return offers.filter(offer => offer.name.toLowerCase().indexOf(q.toLowerCase()) > -1)
  }

  //Get current posts
  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = search(offers);
  const offersToDisplay = currentOffers.slice(indexOfFirstOffer, indexOfLastOffer);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Clock />
      <header className="App-header">
        <h2>Job Monitoring</h2>

        <div>
          <input type='text' value={q} onChange={(e) => setQ(e.target.value)}></input>
        </div>
        
        <OfferBox offers={offersToDisplay} loading={loading} />  
        <Pagination 
         offersPerPage={offersPerPage}
         totalOffers={currentOffers.length}
         paginate={paginate} />
      </header>
    </div>
  );
}

export default App;
