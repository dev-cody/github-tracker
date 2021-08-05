import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    
    onSubmit = (e) => {
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
            </div>
        )
    }
}



export default Search
