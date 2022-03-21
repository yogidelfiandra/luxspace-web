import JustArrived from 'parts/HomePage/JustArrived';
import React from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import BrowseRoom from '../parts/HomePage/BrowseRoom';

export default function HomePage(props) {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
    </>
  );
}
