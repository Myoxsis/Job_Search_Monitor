import React, { useEffect, useState } from 'react';
import { listAllOffers } from './API';

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
        {offersList.map(entry => {
          return (
            <div>
            <p>{entry.name} | {entry.company} | <a href={entry.link}>Lien</a></p>
          </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
