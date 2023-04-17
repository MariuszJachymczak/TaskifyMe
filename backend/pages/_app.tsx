import React from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import "../public/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
