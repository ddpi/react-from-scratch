import React from 'react'

class ActionLink extends React.Component {
  handleClick (e) {
    e.preventDefault()
    console.log('The link was clicked. Event Type:' + e.type + ' ' + e.relatedTarget)
  }

  render () {
    return (
      // <h1>ActionLink is here.</h1>
      <a href="#" onClick={this.handleClick}>Click me</a>
    )
  }
}

export default ActionLink
