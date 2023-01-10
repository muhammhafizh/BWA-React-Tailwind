import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import SiteMap from "../parts/SiteMap";
import useAsync from "../helpers/hooks/useAsync";
import fetchData from "../helpers/fetch";
import { useParams } from "react-router-dom";

export default function Details() {
  const { data, run, isLoading } = useAsync();
  const { idp } = useParams();

  useEffect(() => {
    run(fetchData({ url: `/api/products/${idp}` }));
  }, [idp, run]);

  return (
    <>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />

      {isLoading ? "Loading" : <ProductDetails data={data} />}
      {isLoading ? "Loading" : <Suggestion data={data?.relatedProducts} />}
      <SiteMap />
      <Footer />
    </>
  );
}
