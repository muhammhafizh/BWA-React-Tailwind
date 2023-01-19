import React from "react";
import BreadCrumb from "../components/BreadCrumb/Breadcrumb";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import SiteMap from "../parts/SiteMap";
import Document from "../parts/Document";

export default function Cart() {
  return (
    <Document>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section className="md:py-5">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap"></div>
        </div>
      </section>

      <ShoppingCart />
      <SiteMap />
      <Footer />
    </Document>
  );
}
