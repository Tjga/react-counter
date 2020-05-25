import React from 'react';
import "./index.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.doubleClick = this.doubleClick.bind(this)
    this.clearClick = this.clearClick.bind(this)
    this.minusClick = this.minusClick.bind(this)
    this.halveClick = this.halveClick.bind(this)
  }
  handleClick() {
    console.log("ADDED 1")
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  doubleClick() {
    console.log("DOUBLED")
    this.setState(prevState => {
      return {
        count: prevState.count + prevState.count
      }
    })
  }
  clearClick() {
    console.log("CLEARED")
    this.setState(prevState => {
      return {
        count: prevState.count = 0
      }
    })
  }
  minusClick() {
    console.log("SUBTRACTED")
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }
  halveClick() {
    console.log("HALVED")
    this.setState(prevState => {
      return {
        count: prevState.count / 2
      }
    })
  }
  render() {
    return(
      <div className="app">
        <div className="counter">
        <h1>{this.state.count}</h1>
        </div>
        <div className="buttons">
        <button onClick={this.minusClick}>-1</button>
        <button onClick={this.handleClick}>+1</button>
        <button onClick={this.doubleClick}>2x</button>
        <button onClick={this.halveClick}>halve</button>
        <button onClick={this.clearClick}>clear</button>
        </div>
      </div>
    )
  }
}
export default App;
