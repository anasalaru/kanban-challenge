import React, {PropTypes, Component} from 'react'
import { List } from './listComponent.styles'

class ListComponent extends Component {
  render () {
    const { name } = this.props
    return (
      <List className='col-xs-12 col-sm-4'>
        <div>{name}</div>
      </List>
    )
  }
}

ListComponent.propTypes = {
  name: PropTypes.string.isRequired
}

export default ListComponent
