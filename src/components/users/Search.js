import React, { Component } from 'react'
import PropTypes from 'prop-types';

//Search component
class Search extends Component {
    //Setting the inital state
    state = {
        text: ''
    }
    //Setting the prop types
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    
    onSubmit = (e) => {
        //Preventing the from from loading
        e.preventDefault();
        //Passing the text state to the main app component
        this.props.searchUsers(this.state.text);
        //Setting the text back to nothing
        this.setState({ text: ''});
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={ this.onSubmit }>
                    <input type="text" name="text" placeholder="Search Users" value={ this.state.text } onChange={ this.onChange }/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
            </div>
        )
    }
}



export default Search
