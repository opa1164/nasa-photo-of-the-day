import React, {useState, useEffect} from 'react';
import "./App.css";
import Pic from "./Pic.js"
const axios = require('axios').default;


function App() {
  const [pic, setPic] = useState(null);

  const stopLoop = null;
  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Wz19hknHPjvFEj0Wy7lHqh4MDebFJbFVfsG1CM37&thumbs=true')
    .then(response => {
      setPic(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[stopLoop]);



  console.log(pic);
  if(pic != null){
  return (
    <div className="App">
      <Pic picInfo = {pic}/>
    </div>
  );
  }
  else {
    return(<div/>);
  }
}

export default App;
