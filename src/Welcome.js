/**
 * 学習メモ:
 * 属性の型チェックサンプル
 * propTypesでpropsの型を指定
 * static defaultProps = {...} でデフォルト値を指定（提案段階）
 */
import React from 'react'
import PropTypes from 'prop-types'

class Welcome extends React.Component {
  static defaultProps = {
    name: 'Static Default Property'
  }

  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}

Welcome.propTypes = {
  name: PropTypes.string
}

export default Welcome
