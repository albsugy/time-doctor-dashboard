import React, { Component } from 'react';
import { Row, Col, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';

// Components
import Widget from "./../shared/Widget/Widget.js";
import WidgetFooter from "./../shared/Widget/components/WidgetFooter.js";
import WidgetBody from "./../shared/Widget/components/WidgetBody.js";
import Spinner from "../shared/Spinner/Spinner";

class TopAppsWebsites extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    }
  }
  preventDefault(e){
    e.preventDefault();
  }
  componentDidMount(){
    setTimeout( () => {
      this.setState({
        loaded: true
      })
    }, 4000);
    setTimeout(() => {
      this.setState({
        loaded: false
      })
    }, 8000);
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 12000);
  }
  render() {
    var { handleTopAppsPeriods, top_apps } = this.props;

    const tooltip = (
      <Tooltip id="tooltip">
        <div className="text-left">
          <strong>Atom Editor</strong> - 6h 32m<br />
          <strong>Matlab</strong> - 5h 8m<br />
          <strong>Source Tree</strong> - 4h 46m
        </div>
      </Tooltip>
    );

    return (
      <Widget title="Top Apps&amp;Websites" id="Top_Apps_Websites"
        handleTopAppsPeriods={handleTopAppsPeriods}>
        <WidgetBody>
        {
          this.state.loaded === false ? 
          <Spinner /> :
          <div className="activity-chart-users">
              <Row className="show-grid signel-user">
                  <Col xs={4} md={4}>
                    <div className="user-info">
                      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Design</Tooltip>}>
                        <h5><a href="#user" onClick={this.preventDefault}>Sketch</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={6} md={6} style={{padding: '0'}}>
                    <ProgressBar now={top_apps[0].value} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {top_apps[0].hours}
                  </Col>
              </Row>

              <Row className="show-grid signel-user">
                  <Col xs={4} md={4}>
                    <div className="user-info">
                      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Work</Tooltip>}>
                        <h5><a href="#user" onClick={this.preventDefault}>Slack</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={6} md={6} style={{padding: '0'}}>
                    <ProgressBar now={top_apps[1].value} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {top_apps[1].hours}
                  </Col>
              </Row>

              <Row className="show-grid signel-user">
                  <Col xs={4} md={4}>
                    <div className="user-info">
                      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Productivity</Tooltip>}>
                        <h5><a href="#user" onClick={this.preventDefault}>Asana</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={6} md={6} style={{padding: '0'}}>
                    <ProgressBar now={top_apps[2].value} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {top_apps[2].hours}
                  </Col>
              </Row>

              <Row className="show-grid signel-user">
                  <Col xs={4} md={4}>
                    <div className="user-info">
                      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Productivity</Tooltip>}>
                        <h5><a href="#user" onClick={this.preventDefault}>Time Doctor</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={6} md={6} style={{padding: '0'}}>
                    <ProgressBar now={top_apps[3].value} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {top_apps[3].hours}
                  </Col>
              </Row>

              <Row className="show-grid signel-user">
                  <Col xs={4} md={4}>
                    <div className="user-info">
                      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Chat</Tooltip>}>
                        <h5><a href="#user" onClick={this.preventDefault}>Telegram</a></h5>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col xs={6} md={6} style={{padding: '0'}}>
                    <ProgressBar now={top_apps[4].value} />
                  </Col>
                  <Col xs={2} md={2} className="user-percentage">
                    {top_apps[4].hours}
                  </Col>
              </Row>
          </div>
        }

        </WidgetBody>
        <WidgetFooter>
          <div className="more-users">
            <OverlayTrigger placement="right" overlay={tooltip}>
              <a href="#more" onClick={this.preventDefault} style={{marginLeft: '0'}}>+3 more</a>
            </OverlayTrigger>
          </div>
        </WidgetFooter>
      </Widget>
    );
  }
}

export default TopAppsWebsites;
