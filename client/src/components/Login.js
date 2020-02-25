import React, {useState} from "react";
import axios from "axios";

const Login = () => {

    const [userInput, setUserInput] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleChange = event => {

        setUserInput({...userInput, [event.target.name]: event.target.value})
    }

    return (
        <div className="loginForm">
            <form>
                <label>
                    Username:
                    <input type="text" name="username" value={userInput.username} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={userInput.password} onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>
                    Log In
                </button>

            </form>
        </div>
    )
}

export default Login;