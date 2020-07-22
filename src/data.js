import React from 'react';
import App from './App';
import Location from './Location';
import {Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

class Data extends React.Component
{
    constructor () {
        super();
        this.state = {
            home: true,
            location:false
        };
    }

    handleTabChange = () => {
        this.setState({
            home: false,
            location: true
        });
    }
    handleTabChange2 = () => {
        this.setState({
            location: false,
            home: true
        });
    }
render()
{
return(
<div>
<div style={{background:"#DB2A2A", height:"20px", padding:"20px" ,display:"flex",justifyContent: "flex-end",color:"#fff"}}>
    {/* <href>Home  </href>&nbsp;&nbsp; */}
    <span  style={{color:"#fff",textDecoration:!this.state.location && "underline", fontWeight:"bold", cursor:"pointer"}} onClick={this.handleTabChange2}>
    Home </span>&nbsp;&nbsp; 
    <span  style={{color:"#fff",textDecoration:!this.state.home && "underline", fontWeight:"bold", cursor:"pointer"}} onClick={this.handleTabChange}>  View Your Location
    </span>
</div>
<div className="Menu Page">
{!this.state.location && <App></App>}
{!this.state.home && <Location></Location>}
</div>
{/* <App></App> */}

</div>
)
}
}
export default Data;