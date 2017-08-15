import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class PageHeader extends Component {
  render() {
    var { title, buttons } = this.props;
    return (
      <Row className="show-grid page-header-wrap">
        <Col xs={6} sm={7} md={9}>
          {/* Page Title */}
          <h3 className="page-title">{title}</h3>
        </Col>
        <Col xs={6} sm={5} md={3}>
          {/* Page Buttons */
            buttons
          }
        </Col>
      </Row>
    );
  }
}

export default PageHeader;
