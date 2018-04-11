import React from 'react';

const Components = {
  MenuList: function MenuList(props) {
    return (
     
        <div className="console-list twelve columns">
        <ul className="no-bullets nopadding-nomargin console-list">
                <li>Dashboard</li>
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