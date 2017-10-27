import React from 'react';

const Components = {
  Avatar: function DatePicker(props) {
    return (
     
        <div className="two columns">

          <div className="avatar">
          </div>

        </div>
  
    );
    
  }
}

function Avatar() {
  return <Components.Avatar />;
}

export default Avatar;