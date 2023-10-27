import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class Title extends Component {
  render(){
    const titleColor = this.props.titleColor
    return (
      <h2 style={{color: titleColor}}>This is the title.</h2>
    )
  };
}

class Button extends Component {
  render(){
    return (
      <div>
        <button onClick={()=>this.props.handleClick('red')}>Red</button>
        <button onClick={()=>this.props.handleClick('green')}>Green</button>
      </div>
    )
  };
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      titleColor: 'black'
    }
  }

  handleClick(color){

    console.log(color)

    this.setState({
      titleColor: color
    })
    
  }

  render(){
    return (
      <div className="App">
      <h1>App demo</h1>
      <Title titleColor={this.state.titleColor}></Title>
      <Button titleColor={this.state.titleColor} handleClick={(c)=>this.handleClick(c)}></Button>
      </div>
    )
  };
}

export default App;
