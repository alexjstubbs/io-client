import React from 'react';

const Components = {
  NavBlockUpdates: function NavBlockUpdates(props) {
    return (
     
          <div className="navigation-button h-15-vh twelve columns">
              <h4 className="nopadding-nomargin">Updates</h4>
              <span className="mute nopadding-nomargin">Get the latest version</span>
          </div>
  
    );
    
  }
}

function NavBlockUpdates() {
  return <Components.NavBlockUpdates />;
}

export default NavBlockUpdates;