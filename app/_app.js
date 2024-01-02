import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";
import Layout from "./layout";
import queryClient from "@/lib/queryClient";

function MyApp({ Component, pageProps }) {

    console.log("AHOJ");

  return (
    // Obalíme celú aplikáciu pomocou QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
