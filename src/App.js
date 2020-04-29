import React ,{ useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
// import Info from "./Info";


function App() {

  const [nasaPic, setNasaPic] = useState('');
  const [title, setTitle] = useState('Title');
  const [date, setDate] = useState('Date');
  const [details, setDetails] = useState('Explanation')

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=mmL0vaLzouHjtF71JX0nDc4AFNRnJ1eWCvUIj7oR")

    .then((res) =>{
      setNasaPic(res.data.url);
      setTitle(res.data.title);
      setDate(res.data.date);
      setDetails(res.data.explanation);
    })

    .catch(err => console.log(`There was an error: `, err));
}, []);

  return (
    
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <img src={nasaPic} alt="space" />
      <p>{details}</p>
    </div>

  );

    
}
export default App;
