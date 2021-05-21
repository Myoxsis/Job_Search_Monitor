import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Modal from "./Components/Modal";
import OfferBox from "../Components/OfferBox";
import Pagination from '../Components/Pagination';
import Clock from "../Components/Clock";
import {BrowserRouter as Router, Route} from 'react-router-dom';


const Evaluate = () => {

  return (
    <div className="App">
    <div className="container">
		<div className="box">
			<div className="job-title">Approvisionneur Région (H/F) - CDI - DMBP, négoce bois</div>
		    <div className="job-company">Saint-Gobain</div>
		    <div className="job-description">Retour à la liste des offres Référence : FRA04829 Approvisionneur Région (H/F) - CDI - DMBP, négoce bois Supply Chain France , Provence-Alpes-Côte d'Azur , ST VICTORET CDI Date de publication : 21/05/2021 Supply Chain France ST VICTORET CDI Date de publication : 21/05/2021 POSTULER Description du poste DMBP, filiale spécialiste bois du groupe Saint-Gobain, recherche son/sa futur(e) approvisionneur région Sud-Est. Rejoins-nous sans plus tarder et Pimp ta carrière ! Au sein de notre équipe logistique régionale Sud-Est et basé dans notre agence de St-Victoret (13), tu es le garant(e) de la tenue, de l'évolution et de l'optimisation des stocks des agences commerciales. Tu as également pour mission de participer à l’optimisation des approvisionnements de nos agences. Ton quotidien ? - Gérer les approvisionnements d’une gamme de produits selon les besoins des agences de la région - Veiller à la disponibilité des produits et au respect des délais - Assurer le respect, le suivi et l’évolution du plan de stock des agences - Suivre les indicateurs de performance et mener les actions adéquates - Proposer des plans d’actions pour éliminer les stocks pénalisants et les surstocks - Analyser, Saisir, Contrôler et valider les commandes récurrentes de produits dans notre logiciel d’approvisionnement interne - Paramétrer en collaboration avec les équipes Support Logistiques du siège l’outil d’approvisionnement en cours de déploiement - Optimiser les livraisons sur nos points de vente pour un coût d’achat moindre tout en respectant les objectifs de stocks - Anticiper les prochaines opérations commerciales à venir selon les produits PROFIL RECHERCHÉ Avec une formation de niveau Bac à Bac+2 spécialisée en Logistique, tu as une expérience en approvisionnement et en gestion des stocks. Tu es reconnu(e) pour ta réactivité et ton sens de l’organisation afin d’optimiser au maximum la logistique des commandes. Tu es à l’aise avec les chiffres et les outils informatiques pour mener à bien ta mission. Tu as le sens des responsabilités, un très bon relationnel et tu aimes travailler en équipe. Tu es intéressé(e) ? Parfait ! C’est l’heure de nous montrer de quel bois tu te chauffes ;) Description additionnelle Comment allons-nous pimper ton quotidien ? Avec : Notre ambiance conviviale et nos équipes soudées !Un parcours d’intégration et une offre de formations adaptés.Un suivi personnalisé, parfait pour évoluer, changer de métier ou encore découvrir d’autres enseignes, bref, tracer ta route dans le Groupe !Un accès aux avantages Saint-Gobain (Plan Epargne Groupe, accords d’intéressement et participation) ainsi qu’à des remises commerciales sur nos produits. Qui sommes-nous ? Dispano, c'est LE spécialiste du bois. Pour assurer la distribution en bois (et ses produits dérivés) pour la construction et la décoration, Dispano est composé de + de 1200 collaborateurs répartis dans près de 50 points de vente et des ateliers "portes" et "panneaux". (on sait que tu te demandes pourquoi on les a appelés comme ça, rejoins-nous et on te dira tout ;) !) Dispano est une enseigne de Saint-Gobain Distribution Bâtiment France, premier distributeur de matériaux de construction en France, au service des professionnels et de ceux qui s’investissent dans l’amélioration de leur habitat. Prêt(e) à pimper ton quotidien et celui de nos clients ?Retrouve-nous sur carrieres.sgdb-france.fr !  Chef d’Equipe logistique (H/F) – CDI – CBC, négoce bois FRA04394 France Provence-Alpes-Côte d'Azur CDI 07/05/2021 Conseiller Service Logistique - Toulon (H/F) FRA02931 France Provence-Alpes-Côte d'Azur CDI 31/03/2021 Magasinier Leader (H/F) - GAREOULT (83) FRA04537 France Provence-Alpes-Côte d'Azur CDI 11/05/2021</div>
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