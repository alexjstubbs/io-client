import React from 'react';

const Components = {
  NavBlockUpdates: function NavBlockUpdates(props) {
    return (
     
          <div data-nav-column="1" data-nav-row="2" className="nav-item navigation-button h-16-3-vh twelve columns">
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