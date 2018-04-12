import React, { Component } from 'react';
import NavBlockMultiplayer from './NavBlockMultiplayer';
import NavBlockFriends from './NavBlockFriends';

class ScreenDashboard extends Component {
  render() {
    return (
        
        <div>

        <div className="twelve columns nopadding-nomargin">
         <br />
        </div>

          <div className="content">

            <div className="six columns h-80-vh">
              <NavBlockMultiplayer />
            </div>

            <div className="six columns h-80-vh">
              <NavBlockFriends />
            </div>

          </div>
          
      </div>
    );
  }
}

export default ScreenDashboard;
