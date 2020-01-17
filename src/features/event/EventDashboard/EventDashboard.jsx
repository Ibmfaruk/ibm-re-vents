import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Ram',
    hostPhotoURL: 'assets/Anime.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'assets/c.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'assets/d.gif'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Rem',
    hostPhotoURL: 'assets/Naruto.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'assets/a.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'assets/b.jpg'
      }
    ]
  }
]

//eventsFromDashboard is an array/objects that u can pass down to EventList as props
//each react component can receive props from a parent components, our eventlist is a child
// of our eventdashboard
 class EventDashboard extends Component {
     state = {
         events: eventsFromDashboard,
         isOpen: false
     };

    handleIsOpenToggle = () => {
      this.setState(({isOpen}) =>( {
        isOpen: !isOpen // setState gives us access to the previous state, by using {} u destructure the previous state... before looks like this (prevState) !prevState.isOpen  
      }))
    }
    render() {
        const {events, isOpen} = this.state;
        return (
            <Grid >
                <Grid.Column width={10}>
                    <EventList events={events}/> 
                </Grid.Column>
                <Grid.Column width={6}>
                <Button onClick={this.handleIsOpenToggle} positive animated >
                        <Button.Content visible>Create Event</Button.Content>
                        <Button.Content hidden>
                        <Icon name='calendar check outline' />
                        </Button.Content>
                     </Button>{isOpen && <EventForm cancelFormOpen={this.handleIsOpenToggle}/>}
                    
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard;      