import React, { Component } from 'react';
import NavBlockAudio from './NavBlockAudio';
import NavBlockVideo from './NavBlockVideo';
import NavBlockInput from './NavBlockInput';
import NavBlockThemes from './NavBlockThemes';
import NavBlockReboot from './NavBlockReboot';

class ScreenDashboard extends Component {
  render() {
    return (
        
        <div data-screen="ScreenSettings" className="twelve columns nopadding-nomargin">

          <div className="content">

            <div className="six columns h-80-vh">
              <NavBlockAudio />
              <NavBlockVideo />
              <NavBlockInput />
            </div>

            <div className="six columns h-80-vh">
              <NavBlockThemes />
              <NavBlockReboot />
            </div> 

          </div>
          
      </div>
    );
  }
}

export default ScreenDashboard;
