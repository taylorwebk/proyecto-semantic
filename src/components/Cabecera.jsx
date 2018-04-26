import React, { Component } from 'react'
import {Menu, Header, Icon} from 'semantic-ui-react'
export default class Cabecera extends Component {
  render() {
    const {mostrar} = this.props
    return (
      <div>
        <Menu color="teal" inverted>
          <Menu.Item header>REACT LINKS</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item active>Inicio</Menu.Item>
            <Menu.Item onClick={mostrar}>Sube tu link</Menu.Item>
          </Menu.Menu>
        </Menu>
        <Header color="teal" textAlign="center" icon>
          <Icon name="play" color="teal" />
          REACT LINKS
          <Header.Subheader>
            Bienvenido al sitio para encontrar recursos de React JS
          </Header.Subheader>
        </Header>
      </div>
    )
  }
}
