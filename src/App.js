import React, { Component } from 'react';
import Avatar from './components/Avatar';
import './assets/themes/neon_moon.css';

class App extends Component {
  render() {
    return (
      <div className="App twelve columns">
        <header className="App-header">

          <Avatar></Avatar>
          <h4 className="nopadding-nomargin">Alex</h4>
          Offline <i class="ion-android-cancel icon-justified red"></i>
          <hr className="twelve columns" />

        </header>
      </div>
    );
  }
}

export default App;
