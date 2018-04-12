import React, { Component } from 'react';
import NavBlockWebBrowser from './NavBlockWebBrowser';
import NavBlockTerminal from './NavBlockTerminal';

class ScreenDashboard extends Component {
  render() {
    return (
        
        <div data-screen="ScreenTools" className="twelve columns nopadding-nomargin">

          <div className="content">

            <div className="six columns h-80-vh">
              <NavBlockWebBrowser />
            </div>

            <div className="six columns h-80-vh">
              <NavBlockTerminal />
            </div> 

          </div>
          
      </div>
    );
  }
}

export default ScreenDashboard;
