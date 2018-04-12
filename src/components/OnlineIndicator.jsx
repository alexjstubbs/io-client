import React from 'react';

const Components = {
  OnlineIndicator: function OnlineIndicator(props) {
    return (
     
        <div className="onlineIcon">
            <i className="icon ion-record color-green"></i>
        </div>
        
    );
    
  }
}

function OnlineIndicator() {
  return <Components.OnlineIndicator />;
}

export default OnlineIndicator;