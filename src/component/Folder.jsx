import * as React from "react";
import PropTypes from 'prop-types';
import FileTree from "./FileTree";

export default class Folder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
    this.showContent = this.showContent.bind(this);
  }

  showContent() {
    let trigger = !this.state.showContent;
    this.setState({showContent: trigger});
  }

  render() {
    let content = this.props.content;
    return (
      <div>
        <div onClick={this.showContent}>
          <p>file name = {content.name}</p>
          <p>file type = {content.type}</p>
        </div>
        <FileTree innerFile={content.children} />
      </div>
    )
  }
};