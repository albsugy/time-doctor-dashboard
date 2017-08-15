import React, { Component } from 'react';

class WidgetFooter extends Component {
  render() {
    var { children } = this.props;
    return (
      <div className="widget-footer">
        {children}
      </div>
    );
  }
}

export default WidgetFooter;
