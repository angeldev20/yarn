/* eslint-disable react/no-unescaped-entities */
import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import Section from '../../sections/Section';
import Work from '../../components/Work';
import Svgs from '../../theme/Svgs';

class Different extends Component {
  render() {
    return (
      <Section className="section-different" id="different">
        <Container>
          <h2 className="title-underline text-primary text-center h3 h2-md">
            <span className="underline-info">What's different</span>
          </h2>
          <Row className="justify-content-center">
            <Col lg={3} md={6}>
              <Work
                img={Svgs.money}
                title="Multi-modal"
                content="<p>Yabbr combines ALL of your business communication channels into one unified screen. Web-chat, SMS, Inbound voice-call routing, Email & Social Media</p>"
              />
            </Col>
            <Col lg={3} md={6}>
              <Work
                img={Svgs.user}
                title="Platform management"
                content="<p>Scalable, multiple staff and teams, skill based routing, surveys, detailed reports, custom and quick replies, live monitoring, and more</p>"
              />
            </Col>
            <Col lg={3} md={6}>
              <Work
                img={Svgs.coins}
                title="Price superiority"
                content="<p>Only pay for active agents per month, and all Yabbr chat clients can access our Tier-1 Wholesale SMS gateway, guaranteed lowest price in the industry</p>"
              />
            </Col>
            <Col lg={3} md={6}>
              <Work
                img={Svgs.phones}
                title="Inbound / Outbound"
                content="<p>Yabbr enables you to not only receive inbound communications, but also to send outbound communications via SMS, Email and Social Media.</p>"
              />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Different;
