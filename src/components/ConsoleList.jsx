import React from 'react';

const Components = {
  ConsoleList: function DatePicker(props) {
    return (
     
          <div className="console-list twelve columns">
              <ul className="no-bullets nopadding-nomargin console-list">
                <li className="active">NES</li>
                <li>SNES</li>
                <li>N64</li>
              </ul>
          </div>
  
    );
    
  }
}

function ConsoleList() {
  return <Components.ConsoleList />;
}

export default ConsoleList;