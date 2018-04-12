import React, { Component } from 'react';
import Header from './components/Header';
import ScreenDashboard from './components/ScreenDashboard';
import ScreenCommunity from './components/ScreenCommunity';
import ScreenNext from './components/ScreenNext';
import navigation from './client/io-keyboard-events.js';
import './client/io-init.js';
import './assets/themes/neon_moon.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {first: true};
  }

  componentDidMount() {

    var component = this;

    // Init Navigation
    navigation.navigationInit();

  window.addEventListener("screenRender", function(e) {
    component.setState({
      first: false
    });

    console.log(component.state);
  });
  
  }

  render() {
    const first = this.state.first;

      const navScreen = first ? (
        <ScreenDashboard  />
      ) : (
        <ScreenCommunity />
      );

    return (

      <div className="App container">

          <Header />

          <div className="eleven columns nopadding-nomargin">
            {navScreen}
          </div>

          <div className="one column nopadding-nomargin">
              <ScreenNext />
          </div>

      </div>
    );
  }
}

export default App;
