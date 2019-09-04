import * as React from "react";
import PropTypes from 'prop-types';
import FileTree from "./FileTree";
import FolderImage from "../images/icons8-folder-64.png";
import FolderOpenImage from "../images/icons8-opened-folder-64.png";
import DownArrow from "../images/icons8-down-arrow-64.png";
import RightArrow from "../images/icons8-right-64.png";

export default class Folder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closeFolder: true,
    };
    this.showContent = this.showContent.bind(this);
    this.showImage = this.showImage.bind(this);
  }

  showContent() {
    let trigger = !this.state.closeFolder;
    this.setState({closeFolder: trigger});
  }

  //show the open folder or close folder image
  showImage() {
    if (this.state.closeFolder) {
      return (
        <>
          <div className="col-md-1 text-height"><img width="30px" src={RightArrow} alt="right arrow image"/></div>
          <div className="col-md-2"><img src={FolderImage} alt="folder image"/></div>
        </>
      )
    } else {
      return (
        <>
          <div className="col-md-1 text-height"><img width="30px" src={DownArrow} alt="down arrow image"/></div>
          <div className="col-md-2"><img src={FolderOpenImage} alt="folder open image"/></div>
        </>
      )
    }
  }

  render() {
    let content = this.props.content;
    return (
      <>
        <div>
          <div onClick={this.showContent} className="row">
            {/*{<div className="col-md-2">{this.showImage()}</div>}*/}
            {this.showImage()}
            <div className="col-md-4 text-height">{content.name}</div>
          </div>
        </div>
        <div className="fileTree" hidden={this.state.closeFolder}>
          <FileTree innerFile={content.children}/>
        </div>

      </>
    )
  }
};