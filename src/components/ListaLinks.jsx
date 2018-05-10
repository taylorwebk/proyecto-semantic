import React, { Component } from 'react'
import {Card, Dimmer, Loader, Container} from 'semantic-ui-react'
import axios from 'axios'
import LinkCard from './LinkCard'
export default class ListaLinks extends Component {
  constructor() {
    super()
    this.state = {
      cargando: true,
      links: []
    }
  }
  componentDidMount() {
    axios.get('http://blackcrozz.com/react-links-api/links')
    .then((res) => {
      this.setState({
        cargando: false,
        links: res.data.content
      })
    })
  }
  render() {
    const {cargando, links} = this.state
    let contenido
    if (cargando) {
      contenido = <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    } else {
      contenido = links.map((link, i) => {
        return (
          <LinkCard key={i} link={link} />
        )
      })
    }
    return (
      <Container textAlign='center'>
        <Card.Group>
          {contenido}
        </Card.Group>
      </Container>
    )
  }
}
