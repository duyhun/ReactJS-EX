import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState({ email: '', password: '' })
    return (
        <div className="container text-center">
            <div className="col-4">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onKeyUp={(e)=>{setEmail(e.target.value)}}></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onKeyUp={(e)=>{setPassword(e.target.value)}}></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <hr/>
                <h3> Email: {email} </h3>
                <h3> Password: {password} </h3>
            </div>
        </div>
    )
}
export default Login;