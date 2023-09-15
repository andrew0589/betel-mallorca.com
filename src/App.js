import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Contact, Despre_noi, Footer, Header, Servicii_inchinare, Conducere, Mapa, SarbatoareaMultumirii, Conferinta, Botez } from './containers';
import {CTA, Brand, CustomNavbar } from './components';
import MapSection from './containers/mapa/Mapa'
import './App.css'

const App = () => {
  document.title = "Biserica Penticostală Română Betel"; // Replace "New Title Name" with your desired title

  return (
    <>
      <CustomNavbar/>
      <Header />
      <Despre_noi/>
      <Servicii_inchinare/>
      <Conducere/>
      <Conferinta />
      <SarbatoareaMultumirii />
      <Botez />
      <Contact/>
      <Mapa/>
      <Footer/>
    </>
  );
}

export default App