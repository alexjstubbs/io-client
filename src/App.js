import React, { Component } from 'react';
import Header from './components/Header';
import ScreenDashboard from './components/ScreenDashboard';
import ScreenCommunity from './components/ScreenCommunity';
import ScreenNext from './components/ScreenNext';
import ScreenPrev from './components/ScreenPrev';
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

        // Init Navigation on Screen Update  
        navigation.navigationInit();
      }
    });

}

  render() {

    const screen = this.screens[this.state.screen];
	console.log(this.state.screen )
    return (

      <div className="App container">

          <Header />

		  {this.state.screen != 0 ?
			<div className="one column nopadding-nomargin">
				<ScreenPrev />
			</div>
			: ""
		  }

          <div className="eleven columns nopadding-nomargin">
			{screen}
          </div>

		{this.state.screen  != 2 ?
			<div className="one column nopadding-nomargin">
				<ScreenNext />
			</div>
			: ""
		  }

      </div>
    );
  }
}

export default App;
