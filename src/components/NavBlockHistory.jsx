import React from 'react';

const Components = {
  NavBlockExplorer: function NavBlockExplorer(props) {
    return (
     
          <div className="navigation-button h-25-vh twelve columns">
              <h4 className="nopadding-nomargin">History</h4>
              <span className="mute nopadding-nomargin">View your play history</span>
          </div>
  
    );
    
  }
}

function NavBlockExplorer() {
  return <Components.NavBlockExplorer />;
}

export default NavBlockExplorer;