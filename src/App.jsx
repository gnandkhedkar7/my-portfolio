// React Portfolio with Sample Data

import { useState } from "react";
import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="*" element={<NotFound />}/>
     
    </Routes>
    </BrowserRouter>
    </>
  );
}
