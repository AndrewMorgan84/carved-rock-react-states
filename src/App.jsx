import React from "react";
import "./App.css";
import Products from "./components/Products";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Products />
        </main>
      </div>
      <Footer />
    </>
  );
}
