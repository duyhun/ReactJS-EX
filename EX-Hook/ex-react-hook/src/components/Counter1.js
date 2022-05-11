import useIncrement from "./Counter"

const Counter1 = () => {
    const [count1,setCount1] = useIncrement(1);
    return(
        <div className="container text-center">
            <h1> Counter 1: {count1}</h1>
            <button className="btn btn-dark" onClick={(e) => setCount1(count1 + 1)}> Add 1 </button>
        </div>
    )
}
export default Counter1;