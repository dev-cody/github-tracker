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
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    
    onSubmit = (e) => {
        //Preventing the from from loading
        e.preventDefault();
        //Checking to make sure that the user has input something to search
        if(this.state.text === '') {
            //If it's an empty string, we will display a light colored alert
            this.props.setAlert('Please enter something', 'light')
        } else {
        //Passing the text state to the main app component
        this.props.searchUsers(this.state.text);
        //Setting the text back to nothing
        this.setState({ text: ''});
        }
    }

    render() {

        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form className="form" onSubmit={ this.onSubmit }>
                    <input type="text" name="text" placeholder="Search Users" value={ this.state.text } onChange={ this.onChange }/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {/* Checking to see if there are users, if there are users the clear button will show 
                    If there are no users, the clear button will not show */}
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
    }
}



export default Search
