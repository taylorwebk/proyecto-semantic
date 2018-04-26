import React, { Component, Fragment } from 'react'
import {Container} from 'semantic-ui-react'
import Cabecera from './Cabecera'
import FormModal from './FormModal'
import ListaLinks from './ListaLinks'

class Root extends Component {
  constructor() {
    super()
    this.state={
      mostrarForm: false
    }
    this.showForm = this.showForm.bind(this)
  }
  showForm() {
    this.setState({
      mostrarForm: !this.state.mostrarForm
    })
  }
  render() {
    const {mostrarForm} = this.state
    return (
      <Fragment>
        <Cabecera mostrar={this.showForm} />
        <FormModal
          cerrar={this.showForm} mostrar={mostrarForm}
        />
        <Container textAlign="center">
          <ListaLinks />
        </Container>
      </Fragment>
    )
  }
}
export default Root