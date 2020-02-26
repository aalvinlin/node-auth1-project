import React, {useState} from "react";
import axios from "axios";

const Logout = ({isLoggedIn, setIsLoggedIn}) => {

    const handleLogout = event => {
        event.preventDefault();

        axios.get("http://localhost:5000/api/auth/logout")
            .then(response => {
                console.log("Logout response:", response);

                if (response.status === 200)
                    { setIsLoggedIn(false); }
            })
            .catch(error => {
                console.log("Could not log out:", error)
            })
    }

    return (
        <div className="logoutForm">
            <form>
                
                {isLoggedIn ? 

                <button onClick={handleLogout}>
                    Log Out
                </button>

                :

                <p>You need to be logged in to log out.</p>

                }

            </form>
        </div>
    )
}

export default Logout;