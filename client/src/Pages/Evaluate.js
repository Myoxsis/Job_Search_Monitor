import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Modal from "./Components/Modal";
import OfferBox from "../Components/OfferBox";
import Pagination from '../Components/Pagination';
import Clock from "../Components/Clock";
import StarRating from "../Components/StarRating";
import LabelCategory from "../Components/LabelCategory";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Evaluate = () => {
  const [ offers, setOffers ] = useState(1);
  const [ loading, setLoading ] = useState(false);
  
  const API_URL = 'http://localhost:1337';

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      const res = await axios.get(`${API_URL}/ToEvaluate`);
      setOffers(res.data[0]);
      setLoading(false);
      
    }
    fetchOffers();
  }, []);

  if (loading) {
    return <h2>Loading ...</h2>
}

  return (
    <div className="App">
      <div className="container">

        <div className="box">
          <div className="job-title">{offers.name}</div>
            <div className="job-company">{offers.company}</div>
            <div className="job-company">{offers.function}</div>
            <div className="job-company">{offers.details}</div>
            <div className="job-description">{offers.desc}</div>
          </div>
        
            
        <div className="metrics-container">
          <StarRating value={offers.grade} /> 
        </div>

        <div>
          <LabelCategory />
        </div>
      
      </div>
    </div>
  );
}

export default Evaluate;