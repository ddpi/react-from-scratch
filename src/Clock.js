/**
 * 学習メモ：
 * コンポーネントのライフサイクル(componentDidMount, componentWillUnmount)
 * setIntervalでアロー関数を使うのは外側のスコープと同一のthisを参照するため
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount () {
    console.log('Clock Component Mounted')
    this.timerID = setInterval(
      () => this.tick(), // tick()は1秒毎に呼ばれる
      // this.tick(), // tick()は1度しか呼ばれない(Clockインスタンスのthisと異なる)
      1000
    )
  }

  componentWillUnmount () {
    console.log('Clock Component Unounted')
    clearInterval(this.timerID)
  }

  tick () {
    // console.log('tick called...')
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock
