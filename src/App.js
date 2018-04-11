import React, { Component } from 'react';
import Avatar from './components/Avatar';
import NavBlockExplorer from './components/NavBlockExplorer';
import NavBlockHistory from './components/NavBlockHistory';
import NavBlockAddGames from './components/NavBlockAddGames';
import NavBlockAchievements from './components/NavBlockAchievements';
import NavBlockUpdates from './components/NavBlockUpdates';
import MenuList from './components/MenuList';
import './assets/themes/neon_moon.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="twelve columns">

          <header className="App-header">

            <div className="ten columns">
              <MenuList></MenuList>
            </div>

            <div className="two columns">
              <Avatar></Avatar>
            </div>

          </header>

        <div className="twelve columns nopadding-nomargin">
         <br />
        </div>

          <div className="content">

            <div className="six columns">
              <NavBlockExplorer></NavBlockExplorer>
              <NavBlockHistory></NavBlockHistory>
            </div>

            <div className="six columns">
              <NavBlockAddGames></NavBlockAddGames>
              <NavBlockAchievements></NavBlockAchievements>
              <NavBlockUpdates></NavBlockUpdates>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
