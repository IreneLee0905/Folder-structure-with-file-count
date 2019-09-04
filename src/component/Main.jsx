import React from 'react';
import FileTree from "./FileTree";
import {ShowReadableFileSize} from "../utils/util";


export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      totalFileSize: 0,
      totalFiles: 0,
      showError: false
    };
    this.getTotalFile = this.getTotalFile.bind(this);
  }

  componentDidMount() {
    // get json data from https://chal-locdrmwqia.now.sh
    fetch('https://chal-locdrmwqia.now.sh')
      .then(promise => {
          if (!promise.ok) {
            throw Error(promise.statusText);
          } else {
            return Promise.resolve(promise.json());
          }
        }
      )
      .then(response => {
        let files = response.data;
        this.setState({files: files});
        this.setState(this.getTotalFile(files));
      }).catch((error) => {
      this.setState({showError: true});
      console.log(error);
    });
  }

  // get total files and total file size
  getTotalFile(files) {
    let totalFiles = 0;
    let totalFileSize = 0;

    for (let i = 0; i < files.length; i++) {
      let content = files[i];
      if (content.type === "file") {
        totalFiles++;
        totalFileSize += content.size;
      } else if (content.type === "folder") {
        let summary = this.getTotalFile(content.children);
        totalFiles += summary.totalFiles;
        totalFileSize += summary.totalFileSize;
      }
    }

    return {'totalFiles': totalFiles, 'totalFileSize': totalFileSize};
  }


  render() {
    let files = this.state.files;
    return (
      <div className="container main-page">
        <div className="alert alert-danger" role="alert" hidden={!this.state.showError}>
          Error: failure in impactful strategize mindshare
        </div>
        <div className="row">
          <div className="col-md-8">
            <FileTree innerFile={files}/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <h5>Total Files: {this.state.totalFiles}</h5>
        </div>
        <div className="row">
          <h5>Total Filesize: {ShowReadableFileSize(this.state.totalFileSize)}</h5>
        </div>
      </div>
    )
  }

}