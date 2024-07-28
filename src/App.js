import React from "react";
import { Header } from "./components/head/Header";
import FloatingMenu from "./components/FloatingMenu";
import { ClientResults } from "./components/ClientResults";
import { Scoring } from "./components/Scoring";
import { Recommend } from "./components/Recommend";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Slides } from "./components/Slides";
import { BusinessSolution } from "./components/BusinessSolution";

const App = () => {
  return (
    <>
      <FloatingMenu />
      <Header />
      <ClientResults />
      <Scoring />
      <Recommend />
      <Slides />
      <Contact />
      <BusinessSolution />
      <Footer />
    </>
  );
};

export default App;
