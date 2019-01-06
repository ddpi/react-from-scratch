import React from 'react'
import PropTypes from 'prop-types'
import './FilterableProductTable.css'

class SearchBar extends React.Component {
  /*
  constructor (props) {
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleIsStockChange = this.handleIsStockChange.bind(this)
  }
  */

  // filterTextの変更をprops経由で親コンポーネントに伝える
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value)
  }

  handleIsStockChange = (e) => {
    this.props.onIsStockChange(e.target.checked)
  }

  render () {
    return (
      <div>
        <h2>Search Bar</h2>
        <input
          type="text"
          placeholder="検索キーワード..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}>
        </input><br></br>
        <input type="checkbox"
          checked={this.props.isStockOnly}
          onChange={this.handleIsStockChange}>
        </input>在庫のある商品のみ表示
      </div>
    )
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string,
  isStockOnly: PropTypes.bool,
  onFilterTextChange: PropTypes.func,
  onIsStockChange: PropTypes.func
}

class ProductCategoryRow extends React.Component {
  render () {
    console.log(this.props.category)
    return (
      <tr><th colSpan="2">{this.props.category}</th></tr>
    )
  }
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string
}

class ProductRow extends React.Component {
  render () {
    // console.log(this.props.product)
    const product = this.props.product
    // JSXではstyleはオブジェクトリテラルで渡す
    const name = product.stocked ? product.name : <span className="outOfStock">{product.name}</span>
    // console.log(name)
    return (
      <tr >
        <td>{name}</td><td>{product.price}</td>
      </tr>
    )
  }
}

ProductRow.propTypes = {
  product: PropTypes.object
}
class ProductTable extends React.Component {
  render () {
    const rows = []
    let lastCategory = null
    // console.log(this.props.products)
    this.props.products.forEach((product) => {
      // if (product.name.indexOf(this.props.filterText) === -1) {
      if (!product.name.includes(this.props.filterText)) {
        // console.log(product.name)
        return
      }

      if (this.props.isStockOnly && !product.stocked) {
        console.log(product.stocked)
        return
      }

      // console.log(product.name)
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        )
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      )
      lastCategory = product.category
    })

    return (
      <div>
        <table>
          <thead>
            <tr><th>Name</th><th>Price</th></tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

ProductTable.propTypes = {
  products: PropTypes.array,
  filterText: PropTypes.string,
  isStockOnly: PropTypes.bool
}

/**
 * 親コンポーネント。
 * Stateとして、filterTextとisStockOnlyを管理
 * handleFilterTextChange, handleIsStockChangeはSearchBarから指定される
 */
class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = { filterText: '', isStockOnly: false }
    // this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    // this.handleIsStockChange = this.handleIsStockChange.bind(this)
  }

  handleFilterTextChange = (filterText) => {
    this.setState({ filterText })
  }

  handleIsStockChange = (isStockOnly) => {
    this.setState({ isStockOnly })
  }

  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onIsStockChange={this.handleIsStockChange}
        />
        <ProductTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        />
      </div>
    )
  }
}

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

export default FilterableProductTable
