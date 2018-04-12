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
    this.state = { 
      screen: 0 
    };
    this.screens = {
      0: <ScreenDashboard  />,
      1: <ScreenCommunity  />
    }

  }

  componentDidMount() {

    var component = this;

    // Init Navigation
    navigation.navigationInit();

  window.addEventListener("screenRender", function(e) {

    if (component.screens[e.detail]) {
      component.setState({
        screen: e.detail
      });
  
      navigation.navigationInit();
    }

    else {
      console.log("no existing screen")
    }

    // Init Navigation on Screen Update
  });
  
  }

  render() {

    const screen = this.screens[this.state.screen];

    return (

      <div className="App container">

          <Header />

          <div className="eleven columns nopadding-nomargin">
            {screen}
          </div>

          <div className="one column nopadding-nomargin">
              <ScreenNext />
          </div>

      </div>
    );
  }
}

export default App;
