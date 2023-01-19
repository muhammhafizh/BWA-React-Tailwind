import React from "react";
import Client from "../parts/Client";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import SiteMap from "../parts/SiteMap";
import Document from "../parts/Document";

export default function HomePage() {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Client />
      <SiteMap />
      <Footer />
    </Document>
  );
}
