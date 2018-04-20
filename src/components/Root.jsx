import React, { Component, Fragment } from 'react'

import Cabecera from './Cabecera'
import FormModal from './FormModal'

class Root extends Component {
  constructor() {
    super()
    this.state={
      mostrarForm: false
    }
  }
  render() {
    const {mostrarForm} = this.state
    return (
      <Fragment>
        <Cabecera />
        <FormModal mostrar={mostrarForm} />
      </Fragment>
    )
  }
}
export default Root