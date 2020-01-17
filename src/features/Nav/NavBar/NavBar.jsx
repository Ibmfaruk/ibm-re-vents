import React, { Component} from 'react'
import { Menu, Button, Segment } from 'semantic-ui-react'

 class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        const styles = {
            background: "linear-gradient(to right, #004e92, #000428)"
        }
        return (
     <div style={styles} className="navv">
        <Segment inverted style={styles}>
        <Menu inverted secondary>
        <img className="imgg" src="assets/logo.png" alt="logo" />
    
          <Menu.Item
            name='hangout club'
            active={activeItem === 'hangout club'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='events'
            active={activeItem === 'events'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='people'
            active={activeItem === 'people'}
            onClick={this.handleItemClick}
          />
             <Menu.Item
            name='about developer'
            active={activeItem === 'about developer'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item>
          <Button inverted color='blue' onClick={this.handleItemClick}>Sign up</Button>
            </Menu.Item>
            <Menu.Item>
          <Button inverted color='orange' onClick={this.handleItemClick} >Log-in</Button>
          </Menu.Item>
          </Menu.Menu>
         </Menu>
      </Segment>
    </div>
        )
    }
}

export default NavBar;

     


