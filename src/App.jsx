import { useState } from "react";
import "./App.css";
import Job from "./components/Job";
import CompanySearchResults from "./components/CompanySearchResults";
import MainSearch from "./components/MainSearch";

function App() {
  return (
    <>
      <Job />
      <CompanySearchResults />
      <MainSearch />
    </>
  );
}

export default App;
