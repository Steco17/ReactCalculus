import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results';
import Calculus from './Calculus';



class App extends Component {
  
  state = {
    correctAnswer: 0,
    numQuestions: 0,
  };
  
 
  handleAnswer = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1,
      }));
    }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Calculus handleAnswer={this.handleAnswer} />
          <Results numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
