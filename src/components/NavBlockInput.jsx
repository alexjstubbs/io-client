import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div data-nav-column="0" data-nav-row="2" className="nav-item navigation-button h-25-vh twelve columns">
              <h4 className="nopadding-nomargin">Input</h4>
              <span className="mute nopadding-nomargin">Configure your gamepads/keyboard</span>
          </div>
  
    );
    
  }
}

function NavBlockExplorer() {
  return <Components.NavBlockExplorer />;
}

export default NavBlockExplorer;