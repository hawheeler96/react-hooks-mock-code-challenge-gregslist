import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = 'http://localhost:6001/listings'

function App() {

  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setListings)
  } , [])

  return (
    <div className="app">
      <Header filter={filter} handleChange={setFilter}/>
      <ListingsContainer listings={listings.filter(listing => 
        listing.description.toLowerCase().includes(filter.toLowerCase()))}/>
    </div>
  );
}

export default App;
