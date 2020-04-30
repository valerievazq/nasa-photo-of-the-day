import React ,{ useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Card from './Card.js';

function App() {
  const [nasaData, setNasaData] = useState({});


  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=mmL0vaLzouHjtF71JX0nDc4AFNRnJ1eWCvUIj7oR")

    .then((res) =>{
      setNasaData(res.data);
      
    })

    .catch(err => console.log(`There was an error: `, err));
}, []);

  return (
    
    <div className="App">
    <Nav />
      <div>
      <Card nasaData={nasaData} />
      </div>
      <Footer />
    </div>

  );

    
}
export default App;
