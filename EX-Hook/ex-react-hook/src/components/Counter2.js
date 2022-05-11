import useIncrement from "./Counter"

const Counter2 = () => {
    const [count2,setCount2] = useIncrement(1);
    return(
        <div className="container text-center">
            <h1> Counter 2: {count2}</h1>
            <button className="btn btn-dark" onClick={(e) => setCount2(count2 + 1)}> Add 2 </button>
        </div>
    )
}
export default Counter2;