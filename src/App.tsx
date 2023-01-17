import React from "react";
import "./App.scss";
import LandingPage from "./pages/landing/landing-page";
import { ShoppingCardProvider } from "./context/shopping-cart-context";

function App() {
  return (
    <ShoppingCardProvider>
      <LandingPage />
    </ShoppingCardProvider>
  );
}

export default App;
