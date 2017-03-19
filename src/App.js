import React, { Component } from 'react'
import './App.css'
import ListComponent from './ListComponent'

class App extends Component {
  render () {
    return (
      <div className='row around-xs app'>
        <ListComponent name='To Do' />
        <ListComponent name='In progress' />
        <ListComponent name='Done' />
      </div>
    )
  }
}

export default App
