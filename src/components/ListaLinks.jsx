import React, { Component } from 'react'
import {Card, Image, Icon, Dimmer, Loader, Container} from 'semantic-ui-react'
import axios from 'axios'
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
          <Card centered key={i}>
            <Image src='https://www.google.com/images/logo.png' />
            <Card.Content>
              <Card.Header>
                HACER LUEGO
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  {`El ${link.fecha} a las ${link.hora}`}
                </span>
              </Card.Meta>
              <Card.Description>
                {link.dsc}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='comment' />
                {link.comentarios_count} comentario(s)
              </a>
            </Card.Content>
          </Card>
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
