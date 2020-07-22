import React from 'react';
//import {Link} from 'react-router';
// import './App.css';
// import Data from './data.js';
class Location extends React.Component {
constructor()
{
super();
this.state={ data: {} }
}
// componentDidMount() {
// fetch("https://swapi.co/api/starships/9/")
// .then(response => response.json())
// .then(json =>{
// this.setState({
// data: json
// });
// })
// }
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
  <div className="main">
<h1 className="header">Data</h1>
<button>hello
</button>
<p className="heading">starships record </p>
</div>
<hr/>
<table>
            <thead>
              <tr>
                <th> NAME </th>
                <th> MODEL </th>
                <th> MANUFACTURER </th>
                <th>  COST IN CREDITS </th>
                <th> LENGTH  </th>
                <th> CREW </th>
                <th> PASSENGERS </th>
                <th> CARGO CAPACITY </th>
                <th> MGLT </th>
                <th> HYPERDRIVE RATING </th>
                <th> FILMS </th>   
              </tr>
              
            </thead>
            <tbody>
              <tr>
                {/* <td>{this.state.data.name}</td>
                <td> {this.state.data.model}</td>
                <td> {this.state.data.manufacturer}</td>
                <td>{ this.state.data.cost_in_credits ? parseInt(this.state.data.cost_in_credits,10).toLocaleString() : '' }</td>
                <td> { this.state.data.length ? parseInt(this.state.data.length, 10).toLocaleString():''} </td>
                <td> {this.state.data.crew ? parseInt(this.state.data.crew, 10).toLocaleString(): ''} </td>
                <td> {this.state.data.passengers ? parseInt(this.state.data.passengers,10).toLocaleString():''}</td>
                <td> {this.state.data.cargo_capacity ? parseInt(this.state.data.cargo_capacity, 10).toLocaleString() : ''} </td>
                <td> { this.state.data.MGLT}</td>
                <td> {this.state.data.hyperdrive_rating} </td>
                <td>{this.state.data.films ? this.state.data.films.map((item)=><span onClick={this.sendValue.bind(this,item) }>
<ol><li>{item}</li></ol></span>):''}</td> */}
              </tr>
              
            </tbody>
        </table>
</div>
);
}
}
export default Location;