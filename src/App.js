import React, { Component } from 'react';
import Header from './components/Header';
import ScreenDashboard from './components/ScreenDashboard';
import ScreenCommunity from './components/ScreenCommunity';
import ScreenTools from './components/ScreenTools';
import ScreenSettings from './components/ScreenSettings';
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
	  1: <ScreenCommunity  />,
	  2: <ScreenTools  />,
	  3: <ScreenSettings />
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
		
		// Change Horizontal Screen Nav Active Item    
		document.querySelector("#screen-list li.active").classList.remove("active");
		document.querySelector("#screen-list").getElementsByTagName("li")[component.state.screen].classList.add("active");
	  }

	  else {
		  console.log("No Screen Number:", e.detail)
	  }
	  
    });

}

  render() {

	const screen = this.screens[this.state.screen];
	localStorage.setItem("io-screen", JSON.stringify(this.state.screen));

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

		{this.state.screen  != 3 ?
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
