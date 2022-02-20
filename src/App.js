import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/CardList/CardList";
import { Search } from "./Components/Search-box/Search-bx";
// import { Search } from "./Components/Search-box/Search-bx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users : [],
      boxSearch : ''
    }
  }

  handleChange = e => {
    this.setState({
      boxSearch : e.target.value
    })
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(persons =>this.setState({users : persons}))
  }
  
  render() {

    const {users, boxSearch} = this.state;
    const filterUsers = users.filter(user => (
      user.name.toLowerCase().includes(boxSearch.toLowerCase()) ,
      user.email.toLowerCase().includes(boxSearch.toLowerCase())
    ))
    // console.log(this.state);

    return (
      <div className="app">
        <h3>USERS PROFILE</h3>
        <div>
          <Search searchitem={this.handleChange} />
        </div>
        <CardList userList = {filterUsers} />
      </div>
    );
  }
}

export default App;
