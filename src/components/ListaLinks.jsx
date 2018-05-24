import React, { Component } from 'react'
import {Card, Dimmer, Loader, Container} from 'semantic-ui-react'
import axios from 'axios'
import LinkCard from './LinkCard'
import LinkModal from './LinkModal'
export default class ListaLinks extends Component {
  constructor() {
    super()
    this.state = {
      cargando: true,
      links: [],
      showModal: false,
      linkId: null
    }
    this.cerrarModal = this.cerrarModal.bind(this)
    this.setLinkId = this.setLinkId.bind(this)
  }
  cerrarModal() {
    this.setState({
      showModal: false
    })
  }
  setLinkId(id) {
    this.setState({
      showModal: true,
      linkId: id
    })
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
    const {
      cargando, links, showModal, linkId
    } = this.state
    let contenido
    if (cargando) {
      contenido = <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    } else {
      contenido = links.map((link, i) => {
        return (
          <LinkCard
            key={i}
            link={link}
            setId={this.setLinkId}
          />
        )
      })
    }
    return (
      <Container textAlign='center'>
        <Card.Group>
          {contenido}
        </Card.Group>
        <LinkModal
          show={showModal}
          linkId={linkId}
          close={this.cerrarModal}
        />
      </Container>
    )
  }
}
