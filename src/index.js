//step1
import React from 'react'
import ReactDom from 'react-dom'
import LocationDisplay from './locationDisplay';



//step2
class App extends React.Component{
  state={latitude:null,errorMessage:''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{this.setState({latitude:position.coords.latitude})},
      (error)=>{this.setState({errorMessage:error.message})}
    )
  }
  componentDidUpdate(){
    console.log('update method')
  }
  componentWillUnmount(){
    console.log('clear method')
  }

  render(){
    if(this.state.errorMessage && !this.state.latitude){
      return <div>Error:{this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.latitude){
      return <div>
        <LocationDisplay latitude={this.state.latitude}/>
           </div>
    }
    else{
      return <div>Waiting For Respond</div>
    }


  }

}

  //step3

  ReactDom.render(
    <App />,
    document.querySelector('#root')
  )
