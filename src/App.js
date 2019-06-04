import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
// function getTime() {
//   return (new Date()).toLocaleTimeString()
// }

// function App() {
//   return (
//     <div className="ui container comments">
//       <ApprovalCard>
//         <div>
//           <h4>Warning!</h4>
//             Are you sure you want to do this?
//         </div>
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail 
//           author ={faker.name.findName()} 
//           content="Nice Post!"
//           avatar = {faker.image.avatar()}
//         />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail author ={faker.name.findName()} content="Howdy!" avatar = {faker.image.avatar()} />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail author ={faker.name.findName()} content="I love the weather!" avatar = {faker.image.avatar()} />
//       </ApprovalCard>
//     </div>
//   );
// }

class App extends React.Component{
  //Constructor is initialized first before anything else.
  //super(props) inside the constructor if we have to use this.props, for example
  constructor(props){
    super(props);
    this.state={lat: null};
    window.navigator.geolocation.getCurrentPosition(
      res=> {
        console.log(res)
        this.setState({
          lat: res.coords.latitude
        });
      },
      err=> {
        console.log(err)
      }
    );

  }

  render(){
    return (
      <div>
        <div>
          Lattitude: {this.state.lat}
        </div>
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
}

export default App;
