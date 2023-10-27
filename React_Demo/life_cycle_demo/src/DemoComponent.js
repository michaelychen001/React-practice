import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class DemoComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
        timeStamp: new Date()
    };
  }

  componentDidMount(){
    this.timeId = setInterval(()=>this.tick(), 1000);
  }

  tick(){
    console.log("Run tick() ...")
    this.setState({timeStamp: new Date()})
  }

  static getDerivedStateFromProps(){
    console.log("Run getDerivedStateFromProps() ...")
    return null;
  }

  componentWillUnmount(){
    console.log("Run componentWillUnmount() ...")
    clearInterval(this.timeId);
  }

  render(){
    return (
      <div>
        <p>Demo</p>
        <p>{this.state.timeStamp.getSeconds()}</p>
      </div>
    );
  }
}

export default Demo;
