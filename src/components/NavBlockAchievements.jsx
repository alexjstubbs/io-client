import React from 'react';

const Components = {
  NavBlockAchievements: function NavBlockAchievements(props) {
    return (
     
          <div data-nav-column="1" data-nav-row="1" className="nav-item navigation-button h-20-vh twelve columns">
              <h4 className="nopadding-nomargin">Achievements</h4>
              <span className="mute nopadding-nomargin">View / Edit / Add game achievements</span>
          </div>
  
    );
    
  }
}

function NavBlockAchievements() {
  return <Components.NavBlockAchievements />;
}

export default NavBlockAchievements;