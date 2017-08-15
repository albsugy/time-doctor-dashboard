import React, { Component } from 'react';
import { Row, Button, Glyphicon } from 'react-bootstrap';

// Widgets
import KeyboardMouseActivity from "./../widgets/KeyboardMouseActivity.js";
import HighestMobileUsers from "./../widgets/HighestMobileUsers.js";
import TopAppsWebsites from "./../widgets/TopAppsWebsites.js";

// Components
import PageHeader from "./../shared/PageHeader/PageHeader.js";


class DashboardPage extends Component {
  constructor(){
    super();
    this.state = {
      users_activity: [98, 88, 81, 78, 71],
      top_apps: [
        { value: 100, hours: '99h 45m'},
        { value: 46, hours: '42h 5m'},
        { value: 25, hours: '20h 51m'},
        { value: 18, hours: '15h 34m'},
        { value: 9, hours: '7h 10m'},
      ],
    }
    this.handleChangeUsersActivityValues = this.handleChangeUsersActivityValues.bind(this);
    this.handleTopAppsPeriods = this.handleTopAppsPeriods.bind(this);
  }
  handleChangeUsersActivityValues(period){
    if (period === 'Last 7 Days') {
      this.setState({ users_activity: [98, 88, 81, 78, 71] });
    }else if (period === 'Daily') {
      this.setState({ users_activity: [44, 63, 36, 79, 65] });
    }else if (period === 'Weekly') {
      this.setState({ users_activity: [55, 38, 44, 22, 38] });
    }else if (period === 'Monthly') {
      this.setState({ users_activity: [85, 18, 64, 79, 35] });
    }
  }
  handleTopAppsPeriods(period){
    if (period === 'Last 7 Days') {
      this.setState({ 
        top_apps: [
          { value: 100, hours: '99h 45m' },
          { value: 46, hours: '42h 5m' },
          { value: 25, hours: '20h 51m' },
          { value: 18, hours: '15h 34m' },
          { value: 9, hours: '7h 10m' },
        ],
       });
    }else if (period === 'Daily') {
      this.setState({ 
        top_apps: [
          { value: 70, hours: '99h 45m' },
          { value: 36, hours: '42h 5m' },
          { value: 65, hours: '20h 51m' },
          { value: 88, hours: '15h 34m' },
          { value: 35, hours: '7h 10m' },
        ],
       });
    }else if (period === 'Weekly') {
      this.setState({ 
        top_apps: [
          { value: 30, hours: '99h 45m' },
          { value: 66, hours: '42h 5m' },
          { value: 85, hours: '20h 51m' },
          { value: 28, hours: '15h 34m' },
          { value: 36, hours: '7h 10m' },
        ],
       });
    }else if (period === 'Monthly') {
      this.setState({ 
        top_apps: [
          { value: 90, hours: '99h 45m' },
          { value: 76, hours: '42h 5m' },
          { value: 55, hours: '20h 51m' },
          { value: 68, hours: '15h 34m' },
          { value: 70, hours: '7h 10m' },
        ],
       });
    }
  }
  render() {
    var page_buttons = (
      <div className="page--btns">
        <Button>Edit Layout</Button>
        <Button bsStyle="primary"><Glyphicon glyph="plus" />Add Widget</Button>
      </div>
    );
    var { users_activity, top_apps } = this.state;
    return (
      <div className="page-wrap">
        {/* Page Header */}
        <PageHeader title="Company Dashboard" buttons={page_buttons} />
        {/* Page Content */}
        <div className="page-content">
          <Row className="show-grid">

            {/* Keyboard & Mouse Activity */}
            <KeyboardMouseActivity
              users_activity={users_activity}
              handleChangeUsersActivityValues={this.handleChangeUsersActivityValues}
            />

            {/* Highest percentage of Mobile Time Users */}
            <HighestMobileUsers />

            {/* Top Apps & Websites */}
            <TopAppsWebsites
              top_apps={top_apps}
              handleTopAppsPeriods={this.handleTopAppsPeriods}
            />

          </Row>

        </div>
      </div>
    );
  }
}

export default DashboardPage;
