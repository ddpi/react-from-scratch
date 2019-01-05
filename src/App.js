import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Welcome from './Welcome.js'
import Clock from './Clock.js'
import ActionLink from './ActionLink.js'
import Toggle from './Toggle.js'
import NameForm from './NameForm.js'
import Reservation from './Reservation.js'
import Calculator from './Temperature.js'
import { WelcomeDialog, SignUpDialog, SplitTest } from './Border_Pane.js'
import './App.css'

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}

const element = (
  <div className="App">
    <Welcome />
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
    <Clock />
    <ActionLink />
    <Toggle />
    <NameForm />
    <Reservation />
    <Calculator />
    <WelcomeDialog />
    <SignUpDialog />
    <SplitTest />
    <h2>It is { new Date().toLocaleTimeString() }</h2>
  </div>
)

class App extends Component {
  render () {
    return (element)
  }
}

export default hot(module)(App)
