import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css'

import logoImg from '../images/logo.svg';

function Landing() {
    return (
        <div id="page-landing">
          <div className="content-wrapper">
            <div className="logo-wrapper">
              <img src={logoImg} alt="Happy"/>
              <div className="location">
                <strong>Poços de Caldas</strong>
                <span>Minas Gerais</span>
              </div>
            </div>

            <main>
              <h1>Leve felicidade para o mundo</h1>
              <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <Link to="/login" className="restrict-access-button">
              Acesso restrito
            </Link>

            <Link to="/app" className="enter-app">
              <FiArrowRight size={ 26 } color="rgba(0, 0, 0, 0.6)" />
            </Link>              
          </div>
        </div>
    );
}

export default Landing;