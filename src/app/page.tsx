"use client"

import Navpage from '../pages/Navbar';
import GetStarted from '../pages/getstarted';
import EdgeSolutions from '../pages/EdgeSolutions';
import InnovativeSolutions from '../pages/InnovativeSolutions';
import Services from '../pages/Services';
import DiscoverServices from '../pages/DiscoverServices';
import ClientsStories from '../pages/ClientsStories';
import DigitalTransformation from '../pages/DigitalTransformation';
import Footer from '../pages/Footer';

export default function Home () {
  return (
    <main className="">
      <Navpage />
      <GetStarted />
      <EdgeSolutions />
      <InnovativeSolutions />
      <Services />
      <DiscoverServices />
      <ClientsStories />
      <DigitalTransformation />
      <Footer />
    </main>
  )
}