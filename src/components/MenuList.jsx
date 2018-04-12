import React from 'react';

const Components = {
  MenuList: function MenuList(props) {
    return (
     
        <div className="nav-horizontal-list twelve columns">
          <ul id="screen-list" className="no-bullets nopadding-nomargin nav-horizontal-list">
                <li className="active">Dashboard</li>
                <li>Community</li>
                <li>Tools</li>
                <li>Settings</li>
            </ul>
        </div>
  
    );
    
  }
}

function MenuList() {
  return <Components.MenuList />;
}

export default MenuList;