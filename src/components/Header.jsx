
import React from 'react';
import Avatar from './Avatar';
import MenuList from './MenuList';


const Components = {
    Header: function Header(props) {
    return (
        
        <header className="App-header">

            <div className="ten columns">
                <MenuList />
            </div>

            <div className="two columns">
                <Avatar />
            </div>

        </header>

 
        );
    
    }
}


function Header() {
    return <Components.Header />;
  }
  
  export default Header;