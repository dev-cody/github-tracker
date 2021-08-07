import React, { Component } from 'react'

class User extends Component {
    //We will want this to render when the component does mount
    componentDidMount() {
        //We can use .match.params to pull what we used in the URL for the login infromation
        //This information came from App.js under the path='/user/:login'
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        //Destrcut from the data that is passed in from app.js 
        const {
            name, 
            avatar_url, 
            locaiton, 
            bio, 
            blog, 
            login, 
            html_url, 
            followers, 
            following, 
            public_repos, 
            public_gists, 
            hireable} = this.props.user;
            //Grab the loading spinner
            const { loading } = this.props;

        return (
            <div>
                <h1>{ name }</h1>
            </div>
        )
    }
}

export default User;
