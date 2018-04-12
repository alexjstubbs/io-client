import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div data-nav-column="1" data-nav-row="0" className="nav-item navigation-button h-45-vh twelve columns">
              <h4 className="nopadding-nomargin">Themes</h4>
              <span className="mute nopadding-nomargin">Change ignitions look and feel</span>
          </div>
  
    );
    
  }
}

function NavBlockExplorer() {
  return <Components.NavBlockExplorer />;
}

export default NavBlockExplorer;