import React from 'react';

const Components = {
  FileList: function FileList(props) {
    return (
     
          <div className="file-list five columns">
              File List
          </div>
  
    );
    
  }
}

function FileList() {
  return <Components.FileList />;
}

export default FileList;