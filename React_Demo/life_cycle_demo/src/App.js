import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import DemoComponent from './DemoComponent'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      renderFlag: false
    }
  }

  render(){
    return (
      <div>
        <p>App</p>
        
        {this.state.renderFlag? <DemoComponent></DemoComponent> : ""}
        <button type="button" onClick={()=>{this.setState({renderFlag: true})}}>Render</button>
        <button type="button" onClick={()=>{this.setState({renderFlag: false})}}>Stop Render</button>
      </div>
    );
  }
}

export default App;
