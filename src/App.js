import "./App.css";
import React, { useState } from "react";
import Maintenance from "./pages/Maintenance";
// import { Routes, Route } from "react-router-dom";
// import Landingsite from "./pages/Landingsite";
// import Impressum from "./pages/Impressum";
// import Datenschutz from "./pages/Datenschutz";

function App() {


  return (
    <div style={{'maxHeight': '100vh', 'maxWidth': '100vw'}}>
    <Maintenance />
      {/* {maintenancemode ? (
<div>test</div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Landingsite />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </div>
      )} */}
 </div>
  );
}

export default App;
