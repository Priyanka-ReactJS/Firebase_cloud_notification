import React, { Component } from 'react';
import firebase from './firebase';
class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
     const massaging = firebase.messaging()
     massaging.requestPermission().then(()=>{
       return massaging.getToken()
     }).then(token=>{
       console.log('Token : ',token)
     }).catch((error) =>{
      console.log('error',error)
     })

  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default App;