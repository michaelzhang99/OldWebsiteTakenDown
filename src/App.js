import React from "react";
import MainContent from "./Components/MainContent";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import TimeOfDay from "./Components/TimeOfDay";


function App() {
  return (
    <div>
      <NavBar />
      <TimeOfDay />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
