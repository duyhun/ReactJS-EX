import { useState } from "react"

const useIncrement = () => {
    const [count,setCount] = useState(0);
    let increase = (addAmount) => {
        addAmount = 1;
        setCount(count + addAmount)
    }
    return [count , increase];
}
export default useIncrement;