import React, { Component } from 'react';
import './App.css';

var BarChart = require("react-chartjs").Bar;
var data = {
  labels: ["Si", "Se", "Ni", "Ne", "Fi", "Fe", "Ti", "Te"],
  datasets: [
    {
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [50, 50, 50, 50, 50, 50, 50, 50]
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MBTI</h1>
        <BarChart data={data} width="778" height="389" responsive="true" />
      </div>
    );
  }
}

export default App;
