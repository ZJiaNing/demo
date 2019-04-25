import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapState: new Set()
    }
  }

  render() {
    return (
      <div className="App">
        <h1>This is a demo.</h1>
      </div>
    );
  }
}

export default App;
