import React from "react";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <Toaster />
      <NavBar> // Nested Components
        
     </NavBar>
    </div>
  );
}

export default App;
