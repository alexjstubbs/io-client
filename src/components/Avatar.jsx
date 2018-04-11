import React from 'react';
import OnlineIndicator from './OnlineIndicator';

const Components = {
  Avatar: function Avatar(props) {
    return (
     
        <div className="five columns u-pull-right">

          <div className="avatar container">
            <OnlineIndicator></OnlineIndicator>
          </div>

        </div>
  
    );
    
  }
}

function Avatar() {
  return <Components.Avatar />;
}

export default Avatar;