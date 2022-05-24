import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [account,setAccount] = useState({
        username:'',
        password:''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAccount({...account,[e.target.name]:e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(account.username === 'admin@gmail.com' && account.password === 'letmein'){
            navigate('/employee',{state: account})
        }
    }
    return (
        <div className="container mt-5">
            <h1 > Login </h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onKeyUp={handleChange}></input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" onKeyUp={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>

    )
}
export default Login;