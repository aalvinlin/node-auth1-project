import React, {useEffect, useState} from "react";
import axios from "axios";

const UserList = ({isLoggedIn, setIsLoggedIn}) => {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/auth/users")
            .then(response => {
                console.log("All users response:", response);

                setAllUsers(response.data);
            })
            .catch(error => {
                console.log("error getting all users:", error)
            })

    }, [isLoggedIn])

    return (

        isLoggedIn ?

            allUsers.map(user => <p key={Date.now()}>{user.username}</p>)

            :

            <p>You need to be logged in to see all the registered users.</p>

    );
}

export default UserList;