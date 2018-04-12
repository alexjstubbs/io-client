import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div data-nav-column="0" data-nav-row="0" className="nav-item navigation-button h-30-vh twelve columns">
              <h4 className="nopadding-nomargin">Multiplayer</h4>
              <span className="mute nopadding-nomargin">Play with friends online!</span>
          </div>
  
    );
    
  }
}

function NavBlockExplorer() {
  return <Components.NavBlockExplorer />;
}

export default NavBlockExplorer;