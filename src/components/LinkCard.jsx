import React, { Component } from 'react'
import axios from 'axios'
import {Card, Image, Icon} from 'semantic-ui-react'

const key = '5af49d629f43c1f9a72a09b50fed7cde992033530b7c0'

export default class LinkCard extends Component {
  constructor() {
    super()
    this.state = {
      urlimg: ''
    }
  }
  componentDidMount() {
    const {url} = this.props.link
    axios.get(`http://api.linkpreview.net/?key=${key}&q=${url}`)
    .then(res => {
      this.setState({
        urlimg: res.data.image
      })
    })
    .catch(e => {
      this.setState({
        urlimg: 'https://cdn2.iconfinder.com/data/icons/seo-web-optomization-ultimate-set/512/link_web_marketing-512.png'
      })
    })
  }
  render() {
    const {link, setId} = this.props
    const {urlimg} = this.state
    return (
      <Card centered>
        {urlimg.length>0?<Image src={urlimg} />:null}
        <Card.Content
          style={{wordWrap: 'break-word'}}
        >
          <Card.Header>
            {link.dsc.toUpperCase()}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {`El ${link.fecha} a las ${link.hora}`}
            </span>
          </Card.Meta>
          <Card.Description>
            <a>{link.url}</a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a onClick={
            () => { setId(link.id) }
          }>
            <Icon name='comment' />
            {link.comentarios_count} comentario(s)
          </a>
        </Card.Content>
      </Card>
    )
  }
}
