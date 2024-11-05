import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import ClientLogos from '../components/ClientLogos';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
      <ClientLogos />
      <Contact />
    </main>
  );
};

export default Home;