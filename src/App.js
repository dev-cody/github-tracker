import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  //Setting the inital state
  state = {
    users: [],
    loading: false
  }

  //Pull a random 30 users when component mounts
  async componentDidMount() {
    //Setting the state to show the loading spinner
    this.setState({ loading: true });
    //Basic fetch to the first 30 random github users
    const res = await axios.get(`https://api.github.com/users?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //Setting the state of users to res.data and then removing the spiiner
    this.setState({ users: res.data, loading: false});
  }

  //search github users
  searchUsers = async (text) => {
    //Set the spinner to be loading again
    this.setState({ loading: true });
    //Fetch the data from github with a search query
    const res = await axios.get(`https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //Setting the users to res.data.items and spiiner to false
    this.setState({ users: res.data.items, loading: false});
  }

  //Clear users from state 
  clearUsers = () => this.setState({ users: [], loading: false});

  //Render the components to the DOM
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {/* Props being passed up from the Seach component */}
          <Search searchUsers={ this.searchUsers } clearUsers={ this.clearUsers }/>
          <Users loading={ this.state.loading } users={ this.state.users }/>
        </div>
      </div>
    );
  }
}

export default App;
