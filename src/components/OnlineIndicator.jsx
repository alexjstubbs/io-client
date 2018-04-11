import React from 'react';

const Components = {
  OnlineIndicator: function OnlineIndicator(props) {
    return (
     
        <div class="onlineIcon">
            <i class="icon ion-record color-green"></i>
        </div>
        
    );
    
  }
}

function OnlineIndicator() {
  return <Components.OnlineIndicator />;
}

export default OnlineIndicator;