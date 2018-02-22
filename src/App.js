import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slider from 'material-ui/Slider';
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

class LabeledSlider extends Component {
  render() {
    return (
      <div style={{padding: '0 15px'}}>
        <span>{this.props.label}</span>
        <Slider style={{width: 200}} />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '-18px'}}>
            <div>
              <LabeledSlider label="Introversion v. Extroversion" />
              <LabeledSlider label="Sensing v. Intuition" />
            </div>
            <div>
              <LabeledSlider label="Feeling v. Thinking" />
              <LabeledSlider label="Perceiving v. Judging" />
            </div>
          </div>
        </MuiThemeProvider>
        <BarChart data={data} width="778" height="389" responsive="true" />
      </div>
    );
  }
}

export default App;
