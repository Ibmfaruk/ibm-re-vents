import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react';

 class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image as="a" size="mini" circular src="assets/Naruto.jpg" />
            </List.Item> 
        )
    }
}


export default EventListAttendee; 