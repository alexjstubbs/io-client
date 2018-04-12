import React, { Component } from 'react';
import NavBlockExplorer from './NavBlockExplorer';
import NavBlockHistory from './NavBlockHistory';
import NavBlockAddGames from './NavBlockAddGames';
import NavBlockAchievements from './NavBlockAchievements';
import NavBlockUpdates from './NavBlockUpdates';

class ScreenDashboard extends Component {
  render() {

    return (

        <div data-screen="ScreenDashboard">
            
        <div className="twelve columns nopadding-nomargin">
         <br />
        </div>

          <div className="content">

            <div className="six columns h-80-vh">
              <NavBlockExplorer />
              <NavBlockHistory />
            </div>

            <div className="six columns h-80-vh">
              <NavBlockAddGames />
              <NavBlockAchievements />
              <NavBlockUpdates />
            </div>

          </div>

      </div>
    );
  }
}

export default ScreenDashboard;
