import React from 'react';
import StoreProvider from "./Store";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import textContent from "./data/textContent.json";

export default function App() {

  const { header, footer } = textContent;

  return (
    <StoreProvider>
      <div className="wrapper">
        <Header title={header.title} />
        <Main />
        <Footer signature={footer.signature}/>
      </div>
    </StoreProvider>
  );
}


