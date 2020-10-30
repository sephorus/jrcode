import React, { Component } from 'react';

class List extends Component {
    state = {
        userList: []
    }

    // fetching list from databse
    componentDidMount() {
        const query = this.props.firebase.firestore.collection('users')
        query.onSnapshot((snapshot) => {
            this.setState({
                userList: snapshot.docs
            })
        })
    }

    // rendering list from database
    render() {
        
        return (
            <div>
                <h1>User list below</h1>
                    <ul>
                        {
                            this.state.userList.map(user => (
                                <li>
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