/**
 *  Formとstateのサンプル
*/
import React from 'react'

class NameForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      name: 'Default Name'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    this.setState({
      name: this.state.value
    })
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>Name editing is {this.state.value}</h2>
        <h2>Name submitted is {this.state.name}</h2>
      </div>
    )
  }
}

export default NameForm
