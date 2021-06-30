import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Modal from "./Components/Modal";
import OfferBox from "../Components/OfferBox";
import Pagination from '../Components/Pagination';
import Clock from "../Components/Clock";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Evaluate = () => {
  const [ offers, setOffers ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  
  const API_URL = 'http://localhost:1337';

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      const res = await axios.get(`${API_URL}/ToEvaluate`);
      setOffers(res.data);
      setLoading(false);
      
    }
    fetchOffers();
  }, []);



  return (
    <div className="App">
    <div className="container">
		<div className="box">
			<div className="job-title">{offers[0].name}</div>
		    <div className="job-company">{offers[0].company}</div>
		    <div className="job-description">{offers[0].desc}</div>
	    </div>
	    <div className="metrics-container">
	    	<button className="metrics-item">1</button>
	    	<button className="metrics-item">2</button>
	    	<button className="metrics-item">3</button>
	    	<button className="metrics-item">4</button>
	    	<button className="metrics-item">5</button>
	    </div>
	</div>
    </div>
  );
}

export default Evaluate;