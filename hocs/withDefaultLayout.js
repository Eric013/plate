import React, { Component } from 'react';

import Navigation from '../components/Navigation/Navigation';
import configureLoadingProgressBar from '../utils/routing';

export default ComposedComponent => class WithDefaultLayout extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    configureLoadingProgressBar();
  }

  openDrawer = () => {
    this.setState({
      open: true
    });
  };

  closeDrawer = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Navigation
          open={this.state.open}
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
        />
        <ComposedComponent {...this.props} />
        <style jsx global>
          {`
              * {
                margin: 0;
                box-sizing: border-box;
              }
              a {
                text-decoration: none;
              }
              body {
                font-family: Roboto, sans-serif;
                margin-top: 60px;
                margin-bottom: 0px;
              }
              `}
        </style>
      </div>
    );
  }
};
