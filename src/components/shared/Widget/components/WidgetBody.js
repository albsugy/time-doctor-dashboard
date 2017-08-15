import React, { Component } from 'react';

class WidgetBody extends Component {
  render() {
    var { children } = this.props;
    return (
      <div className="widget-body">
        {children}
      </div>
    );
  }
}

export default WidgetBody;
