import React from "react";
import ErrorMessage from "../parts/ErrorMessage";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import SiteMap from "../parts/SiteMap";
import Document from "../parts/Document";

export default function NotFound() {
  return (
    <Document>
      <Header theme="black" />
      <ErrorMessage />
      <SiteMap />
      <Footer />
    </Document>
  );
}
