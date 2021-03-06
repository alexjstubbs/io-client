import React, { Component } from 'react';
import Avatar from './components/Avatar';
import FileList from './components/FileList';
import ConsoleList from './components/ConsoleList';
import './assets/themes/neon_moon.css';

class GameExplorer extends Component {
  render() {
    return (
      <div className="App container">
        <div className="twelve columns">

        <header className="App-header">

          <Avatar></Avatar>
          <h4 className="nopadding-nomargin">Alex</h4>
          Offline <i class="ion-android-cancel icon-justified red"></i>
          <hr className="twelve columns" />

        </header>


        <div className="content">

          <ConsoleList />

          <br />

          <div className="u-cf"></div>

          <FileList />

        </div>

        </div>
      </div>
    );
  }
}

export default GameExplorer;
