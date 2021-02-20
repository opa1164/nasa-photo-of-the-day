import React, {useState, useEffect} from 'react';
import "./App.css";
const axios = require('axios').default;


function Pic(props) {
  const {picInfo} = props;


  return (
    <div className="Pic Container">
      <img src = {picInfo.url}/>
      <div className = "description">
        <p>{picInfo.title}</p>
        <p>{picInfo.date}</p>
        <p>{picInfo.explanation}</p>
      </div>
    </div>
  );
}

export default Pic;
