import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div data-nav-column="0" data-nav-row="1" className="nav-item navigation-button h-30-vh twelve columns">
              <h4 className="nopadding-nomargin">Manage Friends</h4>
              <span className="mute nopadding-nomargin">View / Edit Friends List</span>
          </div>
  
    );
    
  }
}

function NavBlockExplorer() {
  return <Components.NavBlockExplorer />;
}

export default NavBlockExplorer;