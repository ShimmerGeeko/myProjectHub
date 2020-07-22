import React from 'react';
//import {Link} from 'react-router';
import './App.css';
import Data from './data.js';
class App extends React.Component {
constructor()
{
super();
this.state={ data: {} }
}
componentWillMount() {
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


fetch('https://gj2s6zgiq8.execute-api.us-west-2.amazonaws.com/v1/test-dynamo-info',
        {   method:'GET',
            mode: 'no-cors',
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers': "*"
            },
        })
        .then((response) => response.json())
        .then(json => {
            console.log(json,"test");
            this.setState({
                data:json
            }, function(){

            });
        })
        .catch((error) =>{
            console.error(error);
        });
}
sendValue = (item) => {
//console.log(this.state.userID);
var str=item;
console.log(str);
var str1=str.substring(0,str.length-1);
console.log(str1);
var no=str1.lastIndexOf('/');
console.log(no);
var lnkno=str.substring(no+1,str.length);
// this.props.router.push({pathname:'/data/'+lnkno,state:{values:str}});
console.log('item', item, 'lnkno', lnkno)
this.props.router.push('data/'+lnkno)
}
render() {
  return (
<div>
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