import React from 'react'
import {api} from '../api/init.js'
import { Button } from '../styles/cssInJs/AllBookings.styles.js'

class AllUsers extends React.Component {
    state = { 
            allUsers: []
        }

    componentDidMount() { //fetches all user accounts.
        api.get('users/all')
        .then((response) => {
            this.setState({allUsers: response.data}) //sets response to state.
            console.log('hello')
        })
        .catch((err) => {console.log(err)})
    }

    //MVP +, not implemented yet.
    removeUser = (id) => {
        console.log('remove!' + id)
    }

    render() { 
        const {allUsers} = this.state
        return(
        allUsers.map((user) => {
            return ( 
                <div>
                    <div className= "contact" key= {user._id}>
                        <h1> {`${user.firstName} ${user.lastName}`} </h1>
                        <p> {`${user.email}`} </p>
                        <p> {`${user.phoneNumber}`} </p>
                        <Button onClick={() => this.removeUser(user._id)}> remove user </Button>
                     </div>
                </div>
            )
        
        })
    )
    }
}
 
export default AllUsers;