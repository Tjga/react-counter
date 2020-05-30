import React from 'react';
import "./index.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      //sets the state of count as 0
      count: 0
    }
    // Binds so the code can work. I dont know how tho
    this.handleClick = this.handleClick.bind(this)
    this.doubleClick = this.doubleClick.bind(this)
    this.clearClick = this.clearClick.bind(this)
    this.minusClick = this.minusClick.bind(this)
    this.halveClick = this.halveClick.bind(this)
  }
  //adds 1 to the count
  handleClick() {
    console.log("ADDED 1")
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  // doubles the count
  doubleClick() {
    console.log("DOUBLED")
    this.setState(prevState => {
      return {
        count: prevState.count + prevState.count
      }
    })
  }
  //clears the count
  clearClick() {
    console.log("CLEARED")
    this.setState(prevState => {
      return {
        count: prevState.count = 0
      }
    })
  }
  //subtracts from the count
  minusClick() {
    console.log("SUBTRACTED")
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }
  // divides the count by 2
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
        <div className="greeting">
          <h2>Have a nice day</h2>
        </div>
      </div>
    )
  }
}
export default App;
