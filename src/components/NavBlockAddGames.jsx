import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div className="navigation-button h-30-vh twelve columns">
              <h4 className="nopadding-nomargin">Add New Games</h4>
              <span className="mute nopadding-nomargin">Add games to your library</span>
          </div>
  
    );
    
  }
}

function NavBlockExplorer() {
  return <Components.NavBlockExplorer />;
}
 
export default NavBlockExplorer;