import React, { Component } from 'react';

class List extends Component {
    state = {
        userList: []
    }

    query;

    // fetching list from databse
    componentDidMount() {
        this.query = this.props.firebase.firestore.collection('users').get()
        .then(data => this.setState({
            userList: data.docs
        }))
    }

    handleUpdate = () => {
        this.query = this.props.firebase.firestore.collection('users').get()
        .then(data => this.setState({
            userList: data.docs
        }))
    }

    // rendering list from database
    render() {
        
        return (
            <div>
                <h1>User list below</h1>
                <button onClick={this.handleUpdate}>Update</button>
                    <ul>
                        {
                            this.state.userList.map(user => (
                                <li key={user.data().name}>
                                    { user.data().name }
                                </li>
                            ))
                        }
                    </ul>
            </div>
        )
    }
}

export default List;