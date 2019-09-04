import React from 'react';
import FileTree from "./FileTree";


export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      folders: []
    }
  }

  componentDidMount() {
    // folders from external link
    fetch('https://chal-locdrmwqia.now.sh')
      .then(promise => Promise.resolve(promise.json()))
      .then(response => {
        this.setState({folders: response.data}, () => {
          console.log(this.state);
        });
        console.log(response);
      });
  }

  render() {
    let folders = this.state.folders;
    return (
      <div>
        <FileTree innerFile={folders} />
      </div>
    )
  }

}