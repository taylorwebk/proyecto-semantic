import React, { Component } from 'react'
import {Modal, Header, Input, Button, Message} from 'semantic-ui-react'
import axios from 'axios'
const styles = {
  transform: 'translateY(150px)'
}
export default class FormModal extends Component {
  constructor() {
    super()
    this.state = {
      linktxt: '',
      desctxt: '',
      mensaje: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.enviar = this.enviar.bind(this)
  }
  handleChange(e, { name, value }) {
    this.setState({ [name]: value, mensaje: '' })
  }
  enviar() {
    let datos = {
      url: this.state.linktxt,
      desc: this.state.desctxt
    }
    axios.post('http://blackcrozz.com/react-links-api/link', datos)
    .then((res) => {
      if(res.data.code == 200) {
        location.reload()
      } else {
        this.setState({
          mensaje: res.data.usrmsg
        })
      }
    })
  }
  render() {
    const {mostrar, cerrar} = this.props
    const {linktxt, desctxt, mensaje} = this.state
    return (
      <div>
        <br /><br />
        <Modal
          style={styles}
          open={mostrar}
          onClose={cerrar}
          size="tiny"
        >
          <Modal.Header>
            Envianos tu link
          </Modal.Header>
          <Modal.Content>
            {mensaje==''?null:<Message warning header={mensaje} />}
            Link: 
            <Input onChange={this.handleChange} name="linktxt" value={linktxt} />
            <br />
            Descripci&oacute;n:
            <Input onChange={this.handleChange} name="desctxt" value={desctxt} />
          </Modal.Content>
          <Modal.Actions>
            <Button color="teal" onClick={this.enviar}>Enviar</Button>
            <Button color="red" onClick={cerrar}>Cancelar</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
