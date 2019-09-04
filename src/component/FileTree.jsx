import React from 'react';
import Folder from "./Folder";
import File from "./File";

function FileTree(props) {

  return (
    <div>
      {props.innerFile.map((content, index) => {
        return content.type === 'folder' ? <Folder key={index} content={content}/> :
          <File key={index} content={content}/>;
      })}
    </div>
  );
}

export default FileTree;
