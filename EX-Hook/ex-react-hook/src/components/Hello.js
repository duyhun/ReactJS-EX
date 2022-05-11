import { useState } from "react";

const Hello = () => {
    const [userName,setUserName ] = useState('');
    return (
        <div className="container m-auto mt-5">
            <div class="input-group">
                <span class="input-group-text">Input Your Name</span>
                <textarea class="form-control" aria-label="Input Your Name" onChange={(e) => setUserName(e.target.value)}></textarea>
            </div>
            <h1 className="text-center"> Hello: {userName} </h1>
        </div>
    )
}

export default Hello;