import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
    constructor () {
        super()
        this.state ={
            robots:robots,
            searchfield: ''
        }
    }
    onSearchChange =  (event) => {
        this.setState({ searchfield: event.target.value})
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    } 
    render () {
         return( 
        <div className="tc pa3">
           <h1>RobotFriends</h1>
           <SearchBox searchChange = {this.onSearchChange }/>
        <CardList robots={this.state.robots}/> 
        </div>
    );
    }
   
}
export default App;