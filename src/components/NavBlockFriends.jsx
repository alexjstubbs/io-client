import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div data-nav-column="1" data-nav-row="0" className="nav-item navigation-button h-75-vh twelve columns">
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