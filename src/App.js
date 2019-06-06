import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
import SeasonDisplay from './SeasonDisplay';

const Spinner=()=>{
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        Loading...
      </div>
    </div>
  )
}

class App extends React.Component{
  //Constructor is initialized first before anything else.
  //super(props) inside the constructor if we have to use this.props, for example
  constructor(props){
    super(props);
    this.state={
      lat: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => {
        this.setState({ errorMessage: err.message })
      }  
  );
  };


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({ lat: position.coords.latitude })
        },
        err => {
          this.setState({ errorMessage: err.message })
        }  
    );
    console.log(this.state)
  };
  
  renderMessageBox() {
    return (
              <div>
                <div className="ui container comments">
                  <ApprovalCard>
                    <div>
                      <h4>Warning!</h4>
                      Are you sure you want to do this?
                    </div>
                  </ApprovalCard>
        
                  <ApprovalCard>
                    <CommentDetail 
                      author ={faker.name.findName()} 
                      content="Nice Post!"
                      avatar = {faker.image.avatar()}
                    />
                  </ApprovalCard>
                  <ApprovalCard>
                    <CommentDetail author ={faker.name.findName()} content="Howdy!" avatar = {faker.image.avatar()} />
                  </ApprovalCard>
                  <ApprovalCard>
                    <CommentDetail author ={faker.name.findName()} content="I love the weather!" avatar = {faker.image.avatar()} />
                  </ApprovalCard>
                </div>
              </div>
            )
  }

  renderWeatherBox =()=>{
    // if (this.state.errorMessage && !this.state.lat) {
    //   console.log('1')
    //   return (
    //   <div className="ui container">
    //     <div>
    //       <h1>
    //         Error: {this.state.errorMessage}
    //       </h1>
           
    //     </div>}
    //   </div>
    //     )
    // }
    // if (this.state.lat && this.state.errorMessage ==="") {  
    //   console.log('2')  
    //   return (
    //     <div className="ui container">
    //       <div>
    //         <h1>
    //           Latitude: {this.state.lat}
    //         </h1>
    //       </div>
    //     </div>
    //       )
    // }
    if (this.state.lat == null && this.state.errorMessage === ""){
      console.log('3')
      return (Spinner())
    }

  }

  render(){
    return(
      <div>
        {this.renderWeatherBox()}
        <SeasonDisplay lat={this.state.lat}/>
        {/* {this.renderMessageBox()} */}
      </div>
    )
  }
}

export default App;
