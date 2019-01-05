/**
 * イベントハンドリング https://reactjs.org/docs/handling-events.html
 * (1) イベントハンドラはコンストラクタでbindする（パフォーマンス面でおすすめ）か、
 * (2) onClickでアロー関数を定義する（onClickでbindも可能）か
 * (3) イベントハンドラをアロー関数で定義するか
 */
import React from 'react'

class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true }

    // (1)
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this)
  }

  /*
  // (1),(2)用イベントハンドラ
  handleClick () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  */

  // (3)用イベントハンドラ
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  // (1),(3)用 render()
  render () {
    // handleClickをアロー関数定義しない場合は、
    // <button onClick={(e) => this.handleClick()}>
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }

  /*
  // (2)用render
  render () {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
  */
}

export default Toggle
