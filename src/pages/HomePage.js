import useModalDOM from 'helpers/hooks/useModalDOM';
import useScrollAnchor from 'helpers/hooks/useScrollAnchor';
import useScrollToTop from 'helpers/hooks/useScrollToTop';
import Clients from 'parts/Clients';
import JustArrived from 'parts/HomePage/JustArrived';
import Sitemap from 'parts/Sitemap';
import React from 'react';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import BrowseRoom from '../parts/HomePage/BrowseRoom';
import Hero from '../parts/HomePage/Hero';

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();
  useScrollToTop();

  return (
    <>
      <Header theme='white' position='absolute' />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
