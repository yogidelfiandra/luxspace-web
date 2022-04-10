import Clients from 'parts/Clients';
import Documents from 'parts/Document';
import JustArrived from 'parts/HomePage/JustArrived';
import Sitemap from 'parts/Sitemap';
import React from 'react';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import BrowseRoom from '../parts/HomePage/BrowseRoom';
import Hero from '../parts/HomePage/Hero';

export default function HomePage() {
  return (
    <Documents>
      <Header theme='white' position='absolute' />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </Documents>
  );
}
