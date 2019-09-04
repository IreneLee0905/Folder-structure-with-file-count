import * as React from "react";
import FileImage from "../images/icons8-document-64.png";

function File(props) {

  let content = props.content;
  return (
    <div className="row">

      <div className="col-md-2 offset-md-1">
        <img src={FileImage} alt="file image"/>
      </div>
      <div className="col-md-6 text-height">{content.name}</div>
      <div className="col-md-3 text-height">{content.size}</div>
    </div>
  )
}

export default File;