import React, { Fragment, Component } from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Mouse />
      </header>
    </div>
  )
}

export default App

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>      
      </div>
    );
  }
}

