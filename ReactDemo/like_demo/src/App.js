import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  constructor(props){
    super(props);

    this.state = {
      like: false
    }
  }

  handleClick(){
    this.setState({
      like: !this.state.like
    })

    console.log("handle click event from " + this.props.name);

  }

  render(){

    const btnStyle = {
      color: this.state.like ? "red" : "black", 
      height: "30px", 
      width: "200px", 
      marginTop: "20px"
    }

    const btnText = this.state.like? "Like" : "Unlike"

    return (
      // <button name='likeBtn' style={this.state.like? {color: "red", height: "30px", width: "200px", marginTop: "20px"}: {color: "black", height: "30px", width: "200px", marginTop: "20px"}} onClick={()=>this.handleClick()}>like</button>
      <button name='likeBtn' style={btnStyle} onClick={()=>this.handleClick()}>{btnText}</button>
    )
  }
}

class App extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Button name="btn1"/>
        <Button name="btn2"/>
      </div>
    )
  }

}

export default App;
