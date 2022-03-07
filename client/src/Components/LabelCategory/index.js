import React, { useState } from 'react';

function LabelCategory() {
  const [label, setLabel] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    console.log(item);
    setLabel(cart => [...cart, item]);
  }

  return (
    <div className="catalog-Label">
      <div className="items-1">
      <button value="Administration, fonction publique" onClick={addItemToCart} style={{color: "black"}}>Administration, fonction publique</button>
      <button value="Agroalimentaire" onClick={addItemToCart} style={{color: "black"}}>Agroalimentaire</button>
      <button value="Artisanat d'art" onClick={addItemToCart} style={{color: "black"}}>Artisanat d'art</button>
      <button value="Services aux particuliers, collectivités, entreprises" onClick={addItemToCart} style={{color: "black"}}>Services aux particuliers, collectivités, entreprises</button>
      </div>
      <div className="items-2">
        <button value="Gestion de Projet" onClick={addItemToCart} style={{color: "black"}}>Gestion de Projet</button>
        <button value="Management" onClick={addItemToCart} style={{color: "black"}}>Management</button>
        <button value="Service Client" onClick={addItemToCart} style={{color: "black"}}>Service Client</button>
        <button value="Design" onClick={addItemToCart} style={{color: "black"}}>Design</button>
      </div>
      <div className="items-3">
        <button value="CDI" onClick={addItemToCart} style={{color: "black"}}>CDI</button>
        <button value="CDD" onClick={addItemToCart} style={{color: "black"}}>CDD</button>
        <button value="Interim" onClick={addItemToCart} style={{color: "black"}}>Interim</button>
        <button value="Stage / Alternance" onClick={addItemToCart} style={{color: "black"}}>Stage / Alternance</button>
      </div>
      <div className="selected-items">
        Label Selected : 
        <ul>
          {label.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default LabelCategory;


const job_list = [{
  'sector' : "Administration, business and management",
  'job_desc_en' : "Administrative assistant",
  'job_desc_fr' : "Assistant Administratif"
},
{
  'sector' : "Administration, business and management",
  'job_desc' : "Business analyst"
},
{
  'sector' : "Administration, business and management",
  'job_desc' : "Business continuity specialist"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Business development manager"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Car rental agent"
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "  Charity fundraiser"
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Civil service administrative officer"
  }, 
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Civil service executive officer"
  }, 
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Company secretary"
  }, 
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Compliance officer"
  }, 
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Diplomatic service officer"
  }, 
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Economic development officer"
  }, 
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "  European Union official"
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Health and safety adviser"
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Health records clerk"
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc_en' : "Health service manager",
  'job_desc_fr' : "Responsable du service Santé"
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc_en' : "Human resources adviser",
  'job_list_fr' : 'Conseiller en Ressources Humaines'
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Legal secretary"
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Local government administrative assistant"
  },
  
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Local government officer"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Local government revenues officer"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Management consultant"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Medical secretary"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Member of Parliament (MP)"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Operational researcher"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Personal assistant"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Project manager"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Purchasing manager"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Receptionist"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Recruitment consultant"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Registrar of births, deaths, marriages and civil partnerships"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Scrum Master"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Secretary Trade union official"
  },
  {
  'sector' : "Administration, business and management",
  'job_desc' : "Trading standards officer"
  },
]





/*
return (
    <div className="catalog-Label">
      <div className="items-1">
      <button value="Administration, fonction publique" onClick={addItemToCart} style={{color: "black"}}>Administration, fonction publique</button>
      <button value="Agroalimentaire" onClick={addItemToCart} style={{color: "black"}}>Agroalimentaire</button>
      <button value="Artisanat d'art" onClick={addItemToCart} style={{color: "black"}}>Artisanat d'art</button>
      <button value="Associations" onClick={addItemToCart} style={{color: "black"}}>Associations</button>
      <button value="Banques, assurances, services financiers" onClick={addItemToCart} style={{color: "black"}}>Banques, assurances, services financiers</button>
      <button value="Chimie, plastique, conditionnement" onClick={addItemToCart} style={{color: "black"}}>Chimie, plastique, conditionnement</button>
      <button value="Commerce de détail, grande distribution" onClick={addItemToCart} style={{color: "black"}}>Commerce de détail, grande distribution</button>
      <button value="Communication, marketing, information" onClick={addItemToCart} style={{color: "black"}}>Communication, marketing, information</button>
      <button value="Construction, bâtiment, travaux publics" onClick={addItemToCart} style={{color: "black"}}>Construction, bâtiment, travaux publics</button>
      <button value="Culture, sports, loisirs" onClick={addItemToCart} style={{color: "black"}}>Culture, sports, loisirs</button>
      <button value="Energie" onClick={addItemToCart} style={{color: "black"}}>Energie</button>
      <button value="Enseignement, formation" onClick={addItemToCart} style={{color: "black"}}>Enseignement, formation</button>
      <button value="Environnement, récupération, tri, recyclage, traitement des déchets, matériaux, de l'eau" onClick={addItemToCart} style={{color: "black"}}>Environnement, récupération, tri, recyclage, traitement des déchets, matériaux, de l'eau</button>
      <button value="Equipement, matériel pour activités professionnelles" onClick={addItemToCart} style={{color: "black"}}>Equipement, matériel pour activités professionnelles</button>
      <button value="Fabrication, commerce de gros d'articles destinés à la vente" onClick={addItemToCart} style={{color: "black"}}>Fabrication, commerce de gros d'articles destinés à la vente</button>
      <button value="Gestion, administration des entreprises" onClick={addItemToCart} style={{color: "black"}}>Gestion, administration des entreprises</button>
      <button value="Hôtellerie, restauration, tourisme" onClick={addItemToCart} style={{color: "black"}}>Hôtellerie, restauration, tourisme</button>
      <button value="Immobilier" onClick={addItemToCart} style={{color: "black"}}>Immobilier</button>
      <button value="Industrie textile" onClick={addItemToCart} style={{color: "black"}}>Industrie textile</button>
      <button value="Informatique" onClick={addItemToCart} style={{color: "black"}}>Informatique</button>
      <button value="Ingénieurs d'études et de recherche, chercheurs" onClick={addItemToCart} style={{color: "black"}}>Ingénieurs d'études et de recherche, chercheurs</button>
      <button value="Logistique, transports" onClick={addItemToCart} style={{color: "black"}}>Logistique, transports</button>
      <button value="Matériel électrique, électronique, optique" onClick={addItemToCart} style={{color: "black"}}>Matériel électrique, électronique, optique</button>
      <button value="Mécanique, métallurgie" onClick={addItemToCart} style={{color: "black"}}>Mécanique, métallurgie</button>
      <button value="Minerais, minéraux, sidérurgie" onClick={addItemToCart} style={{color: "black"}}>Minerais, minéraux, sidérurgie</button>
      <button value="Professions juridiques" onClick={addItemToCart} style={{color: "black"}}>Professions juridiques</button>
      <button value="Santé, action sociale" onClick={addItemToCart} style={{color: "black"}}>Santé, action sociale</button>
      <button value="Services aux particuliers, collectivités, entreprises" onClick={addItemToCart} style={{color: "black"}}>Services aux particuliers, collectivités, entreprises</button>
      </div>
      <div className="items-2">
        <button value="Gestion de Projet" onClick={addItemToCart} style={{color: "black"}}>Gestion de Projet</button>
        <button value="Management" onClick={addItemToCart} style={{color: "black"}}>Management</button>
        <button value="Service Client" onClick={addItemToCart} style={{color: "black"}}>Service Client</button>
        <button value="Design" onClick={addItemToCart} style={{color: "black"}}>Design</button>
      </div>
      <div className="items-3">
        <button value="CDI" onClick={addItemToCart} style={{color: "black"}}>CDI</button>
        <button value="CDD" onClick={addItemToCart} style={{color: "black"}}>CDD</button>
        <button value="Interim" onClick={addItemToCart} style={{color: "black"}}>Interim</button>
        <button value="Stage / Alternance" onClick={addItemToCart} style={{color: "black"}}>Stage / Alternance</button>
      </div>
      <div className="selected-items">
        Label Selected : 
        <ul>
          {label.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
*/