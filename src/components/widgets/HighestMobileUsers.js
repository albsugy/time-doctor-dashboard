import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

// Components
import Widget from "./../shared/Widget/Widget.js";
import WidgetFooter from "./../shared/Widget/components/WidgetFooter.js";
import WidgetBody from "./../shared/Widget/components/WidgetBody.js";

class HighestMobileUsers extends Component {
  render() {
    const chartData = {
        datasets: [{
          borderWidth: 3,
            data: [
                85,
                15
            ],
                backgroundColor: [
                "#FBD20A",
                "#D8DDE6"
            ],

        }, {
            borderWidth: 3,
            data: [
                80,
                20
            ],
                backgroundColor: [
                "#EC505F",
                "#D8DDE6"
            ],
        }, {
            borderWidth: 3,
            data: [
                75,
                25
            ],
                backgroundColor: [
                "#48D2EF",
                "#D8DDE6"
            ],
        },
        {
          borderWidth: 3,
          data: [
            65,
            35
          ],
          backgroundColor: [
            "#606CC2",
            "#D8DDE6"
          ],
        },
        {
          borderWidth: 3,
          data: [
            40,
            60
          ],
          backgroundColor: [
            "#51C397",
            "#D8DDE6"
          ],
        }
        ],
        labels: [
            'Benjamin Tyler',
            'Lester Douglas',
            'Olga Simpson',
            'Darrell Hart',
            'Georgia Harper'
        ]
    };
    var mobileUsersOpt = {
           cutoutPercentage:35,
           animation: {
               animationRotate: true,
               duration: 2000
           },
           legend: {
               display: false
           },
           tooltips: {
               enabled: false
           },
           responsive: true,
           maintainAspectRatio: false,
       };
    return (
      <Widget title="Highest Mobile users" id="Highest_percentage_Mobile_Users">
        <WidgetBody>
          <Row className="show-grid">
              <Col xs={3} md={3} style={{padding: '0 0 0 15px'}}>
                <div className="single-mobile-user">
                  <div className="single-mobile-user--color">
                    <span style={{ backgroundColor: '#FBD20A' }}></span>
                  </div>
                  <div className="user-info">
                    <h5>Benjamin Tyler</h5>
                    <p>20h 45m</p>
                  </div>
                </div>
                <div className="single-mobile-user">
                  <div className="single-mobile-user--color">
                    <span style={{ backgroundColor: '#48D2EF' }}></span>
                  </div>
                  <div className="user-info">
                    <h5>Lester Douglas</h5>
                    <p>20h 45m</p>
                  </div>
                </div>
                <div className="single-mobile-user">
                  <div className="single-mobile-user--color">
                    <span style={{ backgroundColor: '#51C397' }}></span>
                  </div>
                  <div className="user-info">
                    <h5>Olga Simpson</h5>
                    <p>20h 45m</p>
                  </div>
                </div>
              </Col>
              <Col xs={3} md={3} style={{ padding: '0 0 0 15px' }}>
                <div className="single-mobile-user">
                  <div className="single-mobile-user--color">
                    <span style={{ backgroundColor: '#EC505F' }}></span>
                  </div>
                  <div className="user-info">
                    <h5>Darrell Hart</h5>
                    <p>20h 45m</p>
                  </div>
                </div>
                <div className="single-mobile-user">
                  <div className="single-mobile-user--color">
                    <span style={{ backgroundColor: '#606CC2' }}></span>
                  </div>
                  <div className="user-info">
                    <h5>Georgia Harper</h5>
                    <p>20h 45m</p>
                  </div>
                </div>
              </Col>
              <Col xs={6} md={6} style={{ padding: '0', maxHeight: '195px'}}>
                <Doughnut data={chartData} options={mobileUsersOpt} height={230} />
                <div className="clearfix"></div>
              </Col>
          </Row>

        </WidgetBody>
        <WidgetFooter>
          <div className="more-users">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Tery Yaml - 22m</Tooltip>}>
              <div className="more-users--item" style={{  backgroundColor: '#fcb941'}}>TY</div>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Nolan Orlando - 17m</Tooltip>}>
              <div className="more-users--item" style={{  backgroundColor: '#5a68c6'}}>NO</div>
            </OverlayTrigger>

          </div>
          <div className="footer-tags">
            <span className="footer-tags-item">Highest</span>
          </div>
        </WidgetFooter>
      </Widget>
    );
  }
}

export default HighestMobileUsers;
