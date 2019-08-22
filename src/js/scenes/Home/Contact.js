/* eslint-disable react/no-unescaped-entities */
import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert
} from 'reactstrap';
import Section from '../../sections/Section';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        when: 'asap',
        how: 'phone',
        contact: '',
        submitted: false
    };
  }

  handleChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(values) {
    values.preventDefault();

    console.log(this.state);

    const vals = {
        when: this.state.when,
        how: this.state.how,
        contact: this.state.contact
    };

    fetch('https://n7lv3wfjne.execute-api.ap-southeast-2.amazonaws.com/contact/submit', {
      method: 'post',
      body: JSON.stringify(vals)
    }).then(res => res.json()).then((res) => {
        this.setState({submitted: true});
    });
  }

  showErrorMessage() {
    return (
      <Alert color="error">Sorry, there was an issue processing your request.</Alert>
    );
  }

  render() {
    const { submitted } = this.state;
    return (
      <Section className="section-contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h1 className="title-underline text-white h3 h1-md">
                <span className="underline-info">
                  Get in touch
                </span>
              </h1>
              <div className="contact-text text-white font-weight-light font-size-lg">
                The yabbr platform provides a personalised & scalable direct marketing channel that optimises conversions. It uses the economic scalability of mass communications with the efficacy of personalised conversations.
              </div>
            </Col>
            <Col lg={5}>
                {submitted ? (<Alert color="success">Your request was submitted successfully.</Alert>) : ('')}
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>When can we give you a call?</Label>
                  <select
                    className="custom-select form-control"
                    name="when"
                    value={this.state.when}
                    onChange={this.handleChange}
                  >
                    <option value="asap">ASAP</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="whenever">Whenever</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label>What’s the best way for us to chat?</Label>
                  <Row>
                    <Col xs={6} className="mb-4 mb-md-0">
                      <select
                        className="custom-select form-control"
                        name="how"
                        value={this.state.how}
                        onChange={this.handleChange}

                      >
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                      </select>
                    </Col>
                    <Col xs={6}>
                      <Input
                        type="text"
                        name="contact"
                        value={this.state.contact}
                        onChange={this.handleChange}

                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Button
                    type="submit"
                    color="light"
                    className="btn-block"
                    disabled={submitted}
                  >
                    We'll talk soon!
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Contact;
