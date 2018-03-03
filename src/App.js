import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slider from 'material-ui/Slider';
import './App.css';

var BarChart = require("react-chartjs").Bar;
var defaultDataset = {
  labels: ["Si", "Se", "Ni", "Ne", "Fi", "Fe", "Ti", "Te"],
  datasets: [
    {
      fillColor: "rgba(0,188,212,0.5)",
      strokeColor: "rgba(0,188,212,0.8)",
      highlightFill: "rgba(0,188,212,0.75)",
      highlightStroke: "rgba(0,188,212,1)",
      data: [50, 50, 50, 50, 50, 50, 50, 50]
    }
  ]
};
const SI = 0, SE = 1, NI = 2, NE = 3, FI = 4, FE = 5, TI = 6, TE = 7;

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function oneMinus(i) {
  return 1 - i;
}

function ltHalf(v) {
  return v < 0.5;
}

function gtHalf(v) {
  return v > 0.5;
}

class LabeledSlider extends Component {
  render() {
    return (
      <div style={{padding: '0 15px'}}>
        <span>
          <span style={{fontWeight: ltHalf(this.props.value) ? 'bold' : ''}}>{this.props.leftLabel}</span>
          <span> v. </span>
          <span style={{fontWeight: gtHalf(this.props.value) ? 'bold' : ''}}>{this.props.rightLabel}</span>
        </span>
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
    dataset: defaultDataset,
  };

  calculateDataset = (values) => {
    var dataset = clone(defaultDataset);
    var data = dataset['datasets'][0]['data']

    var siFormula = oneMinus(values.attitudeSlider)
    siFormula += oneMinus(values.perceivingSlider)
    siFormula += values.lifestyleSlider
    siFormula /= 3

    var seFormula = values.attitudeSlider
    seFormula += oneMinus(values.perceivingSlider)
    seFormula += oneMinus(values.lifestyleSlider)
    seFormula /= 3

    var niFormula = oneMinus(values.attitudeSlider)
    niFormula += values.perceivingSlider
    niFormula += values.lifestyleSlider
    niFormula /= 3

    var neFormula = values.attitudeSlider
    neFormula += values.perceivingSlider
    neFormula += oneMinus(values.lifestyleSlider)
    neFormula /= 3

    var fiFormula = oneMinus(values.attitudeSlider)
    fiFormula += oneMinus(values.judgingSlider)
    fiFormula += oneMinus(values.lifestyleSlider)
    fiFormula /= 3

    var feFormula = values.attitudeSlider
    feFormula += oneMinus(values.judgingSlider)
    feFormula += values.lifestyleSlider
    feFormula /= 3

    var tiFormula = oneMinus(values.attitudeSlider)
    tiFormula += values.judgingSlider
    tiFormula += oneMinus(values.lifestyleSlider)
    tiFormula /= 3

    var teFormula = values.attitudeSlider
    teFormula += values.judgingSlider
    teFormula += values.lifestyleSlider
    teFormula /= 3

    data[SI] = 100 * siFormula
    data[SE] = 100 * seFormula
    data[NI] = 100 * niFormula
    data[NE] = 100 * neFormula
    data[FI] = 100 * fiFormula
    data[FE] = 100 * feFormula
    data[TI] = 100 * tiFormula
    data[TE] = 100 * teFormula
    return dataset
  }

  handleAttitudeSlider = (event, value) => {
    var state = this.state
    state['attitudeSlider'] = value
    state['dataset'] = this.calculateDataset(state)
    this.setState(state);
  };

  handlePerceivingSlider = (event, value) => {
    var state = this.state
    state['perceivingSlider'] = value
    state['dataset'] = this.calculateDataset(state)
    this.setState(state);
  };

  handleJudgingSlider = (event, value) => {
    var state = this.state
    state['judgingSlider'] = value
    state['dataset'] = this.calculateDataset(state)
    this.setState(state);
  };

  handleLifestyleSlider = (event, value) => {
    var state = this.state
    state['lifestyleSlider'] = value
    state['dataset'] = this.calculateDataset(state)
    this.setState(state);
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '-18px'}}>
            <div>
              <LabeledSlider value={this.state.attitudeSlider} onChange={this.handleAttitudeSlider} leftLabel="Introversion" rightLabel="Extroversion" />
              <LabeledSlider value={this.state.perceivingSlider} onChange={this.handlePerceivingSlider} leftLabel="Sensing" rightLabel="Intuition" />
            </div>
            <div>
              <LabeledSlider value={this.state.judgingSlider} onChange={this.handleJudgingSlider} leftLabel="Feeling" rightLabel="Thinking" />
              <LabeledSlider value={this.state.lifestyleSlider} onChange={this.handleLifestyleSlider} leftLabel="Perceiving" rightLabel="Judging" />
            </div>
          </div>
        </MuiThemeProvider>
        <BarChart data={this.state.dataset} width="778" height="389" responsive="true" />
      </div>
    );
  }
}

export default App;
