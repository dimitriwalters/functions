import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slider from 'material-ui/Slider';
import './App.css';

var BarChart = require("react-chartjs").Bar;
var defaultData = {
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
        <Slider value={this.props.value} onChange={this.props.onChange} style={{width: 200}} />
      </div>
    )
  }
}

class App extends Component {
  state = {
    attitudeSlider: 0.5,
    perceivingSlider: 0.5,
    judgingSlider: 0.5,
    lifestyleSlider: 0.5,
    data: defaultData,
  };

  handleAttitudeSlider = (event, value) => {
    this.setState({attitudeSlider: value});
  };

  handlePerceivingSlider = (event, value) => {
    this.setState({perceivingSlider: value});
  };

  handleJudgingSlider = (event, value) => {
    this.setState({judgingSlider: value});
  };

  handleLifestyleSlider = (event, value) => {
    this.setState({lifestyleSlider: value});
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '-18px'}}>
            <div>
              <LabeledSlider value={this.state.attitudeSlider} onChange={this.handleAttitudeSlider} label="Introversion v. Extroversion" />
              <LabeledSlider value={this.state.perceivingSlider} onChange={this.handlePerceivingSlider} label="Sensing v. Intuition" />
            </div>
            <div>
              <LabeledSlider value={this.state.judgingSlider} onChange={this.handleJudgingSlider} label="Feeling v. Thinking" />
              <LabeledSlider value={this.state.lifestyleSlider} onChange={this.handleLifestyleSlider} label="Perceiving v. Judging" />
            </div>
          </div>
        </MuiThemeProvider>
        <BarChart data={this.state.data} width="778" height="389" responsive="true" />
      </div>
    );
  }
}

export default App;
