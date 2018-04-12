import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div data-nav-column="1" data-nav-row="1" className="nav-item navigation-button h-25-vh twelve columns">
              <h4 className="nopadding-nomargin">Reboot</h4>
              <span className="mute nopadding-nomargin">Reboot Your System</span>
          </div>
  
    );
    
  }
}

function NavBlockExplorer() {
  return <Components.NavBlockExplorer />;
}

export default NavBlockExplorer;