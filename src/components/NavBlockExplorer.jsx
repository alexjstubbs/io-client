import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div className="selectedNav navigation-button shapes h-40-vh twelve columns">
              <h4 className="nopadding-nomargin">Game Explorer</h4>
              <span className="mute nopadding-nomargin">Browse your game collection</span>
          </div>
  
    );
    
  }
}

function NavBlockExplorer() {
  return <Components.NavBlockExplorer />;
}

export default NavBlockExplorer;