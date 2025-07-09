
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function UserLogin() {
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const adminDetails = {
        userid: "user",
        password: "pass@123",
    };

    function handleSubmitClick(e) {
        e.preventDefault();

        if (userid === adminDetails.userid && password === adminDetails.password) {
            setError("");
            alert("Login successful!");
        } else {
            setError("User ID or password not match");
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmitClick}>

                <div>
                    <TextField id="filled-basic" label="UserId" variant="filled" 
                        type="text"
                        name="username"
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)}
                    />
                </div>
                <div className='mt-3'>
                    <TextField id="filled-basic" label="Password" variant="filled"
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <br />
                <Button type='submit' size='large' variant="contained" color='primary'>Outlined</Button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
}
