import React, { Component } from 'react'
import { Segment, Form, Button, Icon } from 'semantic-ui-react';

class EventForm extends Component {
    render() {
      const {cancelFormOpen} = this.props;
        return (
                  <Segment>
                    <Form>
                      <Form.Field>
                        <label>Event Title</label>
                        <input placeholder="First Name" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive animated type="submit">
                        <Button.Content visible>Submit</Button.Content>
                        <Button.Content hidden>
                        <Icon name='angle double right' />
                        </Button.Content>
                     </Button>
                      <Button onClick={cancelFormOpen}inverted color='red' type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}


export default EventForm;