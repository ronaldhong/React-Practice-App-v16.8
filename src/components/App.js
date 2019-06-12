import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import CommentDetail from './commentDetail/CommentDetail';
import ApprovalCard from './approvalCard/ApprovalCard';
import faker from 'faker';
import SeasonDisplay from './seasonDisplay/SeasonDisplay';
import { ParallaxProvider } from 'react-scroll-parallax';

const Spinner=()=>{
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
          Loading...
        </div>
      </div>
    )
};

class App extends React.Component{
  //Constructor is initialized first before anything else.
  //super(props) inside the constructor if we have to use this.props, for example
  constructor(props){
    super(props);
    this.state={
      lat: null,
      errorMessage: "",
      showLoader: false
    };
  };


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => {
          this.setState(
            { lat: position.coords.latitude,
              showLoader: false
            })
        },
        err => {
          this.setState({ errorMessage: err.message })
        }  
    );
  };
  
  renderMessageBox() {
    return (
              <div>
                <div className="ui divider"></div>
                <br/>
                <br/>
                <div className="ui container comments ">
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



  render(){
    return(
      <ParallaxProvider>
        <div>
          <SeasonDisplay lat={this.state.lat}/>
          {/* {this.renderMessageBox()} */}
       </div>
      </ParallaxProvider>  
    )
  }
}

export default App;
