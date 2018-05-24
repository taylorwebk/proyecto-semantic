import React, { Component } from 'react'
import {Modal, Header} from 'semantic-ui-react'
import axios from 'axios'

import './loader.css'

const styles = {
  transform: 'translateY(150px)'
}
export default class LinkModal extends Component {
  constructor() {
    super()
    this.state = {
      cargando: true,
      link: null,
      comentarios: []
    }
  }
  componentDidUpdate(prevProps) {
    const {linkId} = this.props
    if (prevProps.linkId !== linkId) {
      this.setState({
        cargando: true
      })
      axios.get(
        `http://blackcrozz.com/react-links-api/link/${linkId}`
      )
      .then((res) => {
        const {
          id, url, dsc, fecha, hora, comentarios
        } = res.data
        let linkstate = {
          id,
          url,
          dsc,
          fecha,
          hora
        }
        this.setState({
          cargando: false,
          link: linkstate,
          comentarios: comentarios
        })
      })
    }
  }
  render() {
    console.log(this.state)
    
    const {cargando, link, comentarios} = this.state
    const {show, linkId, close} = this.props
    let contenido
    if (cargando) {
      contenido = <div className="spinner"></div>
    } else {
      contenido = <p>CONTENIDO {linkId}</p>
    }
    return (
      <Modal
        style={styles}
        open={show}
        onClose={close}
      >
        <Header icon='linkify'>
          {cargando?'Cargando...': link.url}
        </Header>
        <Modal.Content>
          {contenido}
        </Modal.Content>
      </Modal>
    )
  }
}
