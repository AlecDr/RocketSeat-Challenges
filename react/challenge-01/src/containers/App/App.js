import React, {Component} from 'react';
import logo from '../../assets/images/react-logo.png';
import styles from './App.css';

class App extends Component{
  
  render(){
    return (

        <div>
          <h1>React App</h1>
          <img src={logo}/>
        </div>  
      
    );
  }
}


export default App;