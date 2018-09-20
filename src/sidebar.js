import React, { Component } from 'react'


class FulfilSidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  activate() {
    this.setState({
      active: true
    });
  }

  deactivate() {
    this.setState({
      active: false
    });
  }

  consoleTest() {
    console.log('testingggg');
  }

  render() {
    if (this.state.active) {
      return (
        <div>
          Sidebar is Active
        </div>
      );
    }
    else {
      return(
        <div>
          Sidebar is Inactive
        </div>
      );
    }
  }
}