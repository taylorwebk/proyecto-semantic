import React, { Component } from 'react'
import {Modal, Header, Input} from 'semantic-ui-react'
export default class FormModal extends Component {
  render() {
    const {mostrar} = this.props
    return (
      <Modal open={mostrar}>
        <Modal.Header>
          Envianos tu link
        </Modal.Header>
        <Modal.Content>
          Link<Input />
        </Modal.Content>
      </Modal>
    )
  }
}
