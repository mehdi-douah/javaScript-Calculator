import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Calculator extends React.Component {
  render () {
    return <h1>Now it's work just perfectly</h1>
  }
}

ReactDOM.render(<Calculator />, $('#root')[0])
