import React from 'react'
import PropTypes from 'prop-types'

function FancyBorder (props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

FancyBorder.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node
}

// color="blue"はFancyBorder-blueに変換される。実際に青枠にするためにはCSS定義が必要
function Dialog (props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

Dialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node
}

function WelcomeDialog () {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  )
}

class SignUpDialog extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = { login: '' }
  }

  render () {
    return (
      <Dialog title="Mars Exploration Program"
        message="How should we refer to you?">
        <input value={this.state.login}
          onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    )
  }

  handleChange (e) {
    this.setState({ login: e.target.value })
  }

  handleSignUp () {
    alert(`Welcome aboard, ${this.state.login}!`)
  }
}

// 要CSS定義
function SplitPane (props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

SplitPane.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element
}

function SplitTest () {
  return (
    <SplitPane
      left={
        <h2>left pane</h2>
      }
      right={
        <h2>right pane</h2>
      } />
  )
}

export { WelcomeDialog, SignUpDialog, SplitTest }
