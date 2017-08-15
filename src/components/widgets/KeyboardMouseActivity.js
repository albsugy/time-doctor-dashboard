import React, { Component } from 'react';
import { Row, Col, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';

// Components
import Widget from "./../shared/Widget/Widget.js";
import WidgetFooter from "./../shared/Widget/components/WidgetFooter.js";
import WidgetBody from "./../shared/Widget/components/WidgetBody.js";

import userAvatar from "./../../images/user-avatar-1.png";

class KeyboardMouseActivity extends Component {
  preventDefault(e){
    e.preventDefault();
  }
  render() {
    var { users_activity, handleChangeUsersActivityValues } = this.props;

    const tooltip = (
      <Tooltip id="tooltip">
        <div className="text-left">
          <strong>Raju Mazumder</strong> - 10%<br />
          <strong>Khurram Butt</strong> - 10%<br />
          <strong>Eslam Mahmoud</strong> - 10%<br />
          <strong>Evgeny Stashevsky</strong> - 10%<br />
          <strong>Nataliya Oleynyk</strong> - 10%<br />
          <strong>Butt Raju</strong> - 10%<br />
          <strong>Khurram Eslam</strong> - 10%<br />
          <strong>Nataliya Evgeny</strong> - 10%<br />
          <strong>Mazumder Oleynyk</strong> - 10%<br />
          <strong>Khurram Butt</strong> - 10%
        </div>
      </Tooltip>
    );
    const user_tooltip = (
      <Tooltip id="tooltip">
          <strong>Development</strong> Team<br />
      </Tooltip>
    );
    
    return (
      <Widget title="Keyboard &amp; Mouse Activity" id="Keyboard_Mouse_Activity"
        handleChangeUsersActivityValues={handleChangeUsersActivityValues}>
        <WidgetBody>
          {

          }
          <div className="activity-chart-users">
              <Row className="show-grid signel-user">
                  <Col xs={6} md={6}>
                    <div className="user-info">
                      <span className="userAvatar-placeholder rm">RM</span>
                      <OverlayTrigger placement="top" overlay={user_tooltip}>
                        <h5><a href="#user" onClick={this.preventDefault}>Raju Mazumder</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={4} md={4} style={{padding: '0'}}>
                    <ProgressBar now={users_activity[0]} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {users_activity[0]}%
                  </Col>
              </Row>

              <Row className="show-grid signel-user">
                  <Col xs={6} md={6}>
                    <div className="user-info">
                      <span className="userAvatar-placeholder kb"
                        style={{background:`url(${userAvatar}) 50% 50%`}}></span>
                      <OverlayTrigger placement="top" overlay={user_tooltip}>
                        <h5><a href="#user" onClick={this.preventDefault}>Khurram Butt</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={4} md={4} style={{padding: '0'}}>
                    <ProgressBar now={users_activity[1]} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {users_activity[1]}%
                  </Col>
              </Row>

              <Row className="show-grid signel-user">
                  <Col xs={6} md={6}>
                    <div className="user-info">
                      <span className="userAvatar-placeholder em">EM</span>
                      <OverlayTrigger placement="top" overlay={user_tooltip}>
                        <h5><a href="#user" onClick={this.preventDefault}>Eslam Mahmoud</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={4} md={4} style={{padding: '0'}}>
                    <ProgressBar now={users_activity[2]} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {users_activity[2]}%
                  </Col>
              </Row>

              <Row className="show-grid signel-user">
                  <Col xs={6} md={6}>
                    <div className="user-info">
                      <span className="userAvatar-placeholder es">ES</span>
                      <OverlayTrigger placement="top" overlay={user_tooltip}>
                        <h5><a href="#user" onClick={this.preventDefault}>Evgeny Stashevsky</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={4} md={4} style={{padding: '0'}}>
                    <ProgressBar now={users_activity[3]} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {users_activity[3]}%
                  </Col>
              </Row>

              <Row className="show-grid signel-user">
                  <Col xs={6} md={6}>
                    <div className="user-info">
                      <span className="userAvatar-placeholder no">NO</span>
                      <OverlayTrigger placement="top" overlay={user_tooltip}>
                        <h5><a href="#user" onClick={this.preventDefault}>Nataliya Oleynyk</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={4} md={4} style={{padding: '0'}}>
                    <ProgressBar now={users_activity[4]} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {users_activity[4]}%
                  </Col>
              </Row>
          </div>

        </WidgetBody>
        <WidgetFooter>
          <div className="more-users">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Mike Jack - 9%</Tooltip>}>
              <div className="more-users--item" style={{  backgroundColor: '#f65161'}}>MJ</div>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Dani Morgan - 11%</Tooltip>}>
              <div className="more-users--item" style={{  backgroundColor: '#00d2ed'}}>DM</div>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Alex Morse - 7%</Tooltip>}>
              <div className="more-users--item" style={{background:`url(${userAvatar}) 50% 50%`}}></div>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <a href="#more" onClick={this.preventDefault}>+10 more</a>
            </OverlayTrigger>
          </div>
          <div className="footer-tags">
            <span className="footer-tags-item">Lowest</span>
          </div>
        </WidgetFooter>
      </Widget>
    );
  }
}

export default KeyboardMouseActivity;
