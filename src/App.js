import React from 'react';
//import {Link} from 'react-router';
import './App.css';
import Data from './data.js';
import axios from 'axios';
const cors = require('cors');
class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
      data:{}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

fetchPosts() {
  // fetch('https://gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info',
  // {   
  //   method:'GET',
  //     mode: 'no-cors',
  //     headers:{
  //       "content-type": "application/json", 
  //       "Access-Control-Allow-Methods": "OPTIONS,GET", 
  //       "Access-Control-Allow-Origin": "*", 
  //       "Access-Control-Allow-Header": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token" }
  //     ,
  // })
  // .then(response=> response.json())
  // .then(json => {
     
  //     this.setState({
  //         data:json
  //     }, function(){

  //     });
  // })
  // .catch((error) =>{
  //     console.error(error);
  // });
  // console.log(this.state.data,"test");
  fetch(`https://gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info`)
  .then(response => response.json())
  .then(state => this.setState(state));

  // fetch("https://gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info")
// .then(response => response.json())
// .then(json =>{
//   if (json.code === 200) {
//     this.setState({
//     data: json
//     });
// }
// console.log(this.state.date,"Hello")})
// console.log("Data",this.state.data)


}
// componentDidMount() {
//   const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => console.log('This is your data', data[0].id));

//     axios({
//       method: 'get',
//       url: 'https://gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info',
//     });
// }
componentDidMount() {
  this.fetchPosts();
//  fetch("gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info")
//  .then(response => response.json())
//  .then(json =>{
//    if (json.code === 200) {
//      this.setState({
//      data: json
//      });
//  }
//  console.log(this.state.date,"Hello")})
//  console.log("Data",this.state.data)


// fetch('gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info')
// .then(function(response) {
//   // Do stuff with the response
//   console.log(response,"response")
// })

// .catch(function(error) {
//   console.log('Looks like there was a problem: \n', error);
// });


// fetch('gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info')
// .then(function(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   console.log(response)
//   // Do stuff with the response
// })
// .then(response => response.json())
// // .then(json =>{
// //     this.setState({
// //     data: json
// //     });}

// .catch(function(error) {
//   console.log('Looks like there was a problem: \n', error);
// });

// fetch('https://gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info', { mode: 'cors'})
//   .then(response => response.json())
//   .then(json => {
//     if (json.code === 200) {
//         this.setState({
//         data: json
//         });
//          console.log(this.state.data,"Dataa")
//   }})
//   .catch(e => {
//     console.log(e);
//     return e;
//   });


// fetch('https://gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info',
//         {   method:'GET',
//             mode: 'no-cors',
//             headers:{
//                 'Access-Control-Allow-Origin':'*',
//                 'Access-Control-Allow-Headers': "*"
//             },
//         })
//         .then((response) => response.json())
//         .then(json => {
//             console.log(json,"test");
//             this.setState({
//                 data:json
//             }, function(){

//             });
//         })
//         .catch((error) =>{
//             console.error(error);
//         });
}
// sendValue = (item) => {
// //console.log(this.state.userID);
// var str=item;
// console.log(str);
// var str1=str.substring(0,str.length-1);
// console.log(str1);
// var no=str1.lastIndexOf('/');
// console.log(no);
// var lnkno=str.substring(no+1,str.length);
// // this.props.router.push({pathname:'/data/'+lnkno,state:{values:str}});
// console.log('item', item, 'lnkno', lnkno)
// this.props.router.push('data/'+lnkno)
// }
render() {
  return (
<div>
<form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
  {console.log("Body",this.state.data)}

 <table>
             <thead>
               <tr>
                 <th> NAME </th>
                 <th> Email </th>
                 <th> Address </th>
                 <th> Action </th>
               </tr>
              
             </thead>
             <tbody>
               <tr>
                 <td>{this.state.data.name}</td>
                 <td> {this.state.data.model}</td>
                 <td> {this.state.data.manufacturer}</td>
                 <td>{ this.state.data.cost_in_credits ? parseInt(this.state.data.cost_in_credits,10).toLocaleString() : '' }</td>
                 {/* <td>{this.state.data.films ? this.state.data.films.map((item)=><span onClick={this.sendValue.bind(this,item) }>
 <ol><li>{item}</li></ol></span>):''}</td> */}
               </tr>
              
             </tbody>
         </table>
</div>
);
}
}
export default App;