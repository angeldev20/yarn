import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import Section from '../../sections/Section';
import Bitmaps from '../../theme/Bitmaps';

class Introduction extends Component {
  render() {
    return (
      <Section className="section-introduction">
        <Container>
          <Row>
            <Col lg={4}>
              <h1 className="title-underline text-white h3 h1-xl">
                <span className="underline-info underline-md-center">
                  <span className="text-info">
                    Yabbr unifies
                    <br />
                    messaging in
                  </span>
                  <br />
                  one easy to use platform
                </span>
              </h1>
            </Col>
            <Col lg={8} className="d-flex justify-content-center">
              <div>
                <img src={Bitmaps.diagram} className="diagram-image d-none d-md-block" alt="diagram-desktop" />
                <img src={Bitmaps.diagram_mobile} className="diagram-image d-block d-md-none" alt="diagram-mobile" />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Introduction;
