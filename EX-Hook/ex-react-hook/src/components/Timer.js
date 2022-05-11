import { useState, useEffect } from "react"

const Timer = () => {
    const [time,setTime] = useState(10);
    useEffect(()=> {
        setInterval(() => {
            setTime(time -1);
        },1000);
    })
    if(time == 0){
        return (
            alert("Time's up")
        )
    }
    return(
        <div>
            <h1> {time} </h1>
        </div>
    )
}
export default Timer;