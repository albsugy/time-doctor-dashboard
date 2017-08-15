import React, { Component } from 'react';
import { Col, MenuItem, Glyphicon, Dropdown } from 'react-bootstrap';

class Widget extends Component {
  constructor(props){
    super(props);
    this.state = {
      widget_options: {
        period: 'Last 7 Days'
      }
    }
    this.handleSelectTime = this.handleSelectTime.bind(this);
  }
  handleSelectTime(period){
    this.setState({ widget_options: { period } });
    if (this.props.id === 'Keyboard_Mouse_Activity') {
      this.props.handleChangeUsersActivityValues(period);
    } else if (this.props.id === 'Top_Apps_Websites') {
      this.props.handleTopAppsPeriods(period);
    }
  }
  render() {
    var { widget_options } = this.state;
    var { title, id, children } = this.props;
    return (
      <Col xs={12} sm={6} md={4} className="widget-wrap col-xl-3">
        <div className="widget" id={id}>
          {/* Widget Header */}
          <div className="widget-header">
            {/* Widget Title */}
            <div className="widget-header--title"><h4>{title}</h4></div>
            {/* Widget Options */}
            <div className="widget-header--options">
              {/* Time Menu */}
              <Dropdown id="dropdown-custom-1" pullRight>
               <Dropdown.Toggle noCaret className="select-period">
                {widget_options.period}
                 <Glyphicon glyph="menu-down" />
               </Dropdown.Toggle>
               <Dropdown.Menu className="select-period-menu">
                 <MenuItem eventKey="1"
                  onClick={() => this.handleSelectTime('Last 7 Days')}
                   className={widget_options.period === 'Last 7 Days' ? 'active' : ''}>
                   Last 7 Days
                 </MenuItem>
                 <MenuItem eventKey="1"
                   onClick={() => this.handleSelectTime('Daily')}
                   className={widget_options.period === 'Daily' ? 'active' : ''}
                   >Daily</MenuItem>
                 <MenuItem eventKey="2"
                   onClick={() => this.handleSelectTime('Weekly')}
                   className={widget_options.period === 'Weekly' ? 'active' : ''}
                   >Weekly</MenuItem>
                 <MenuItem eventKey="3"
                   onClick={() => this.handleSelectTime('Monthly')}
                   className={widget_options.period === 'Monthly' ? 'active' : ''}
                   >Monthly</MenuItem>
               </Dropdown.Menu>
             </Dropdown>
             {/* Options Menu */}
             <Dropdown id="dropdown-custom-1" pullRight>
              <Dropdown.Toggle noCaret className="select-option">
                <Glyphicon glyph="option-vertical" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="select-option-menu">
                <MenuItem eventKey="1">Edit widget</MenuItem>
                <MenuItem eventKey="2">Delete widget</MenuItem>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </div>
          {/* Widget Body */}
          {children}
          {/* Widget Footer */}

        </div>
      </Col>
    );
  }
}

export default Widget;
