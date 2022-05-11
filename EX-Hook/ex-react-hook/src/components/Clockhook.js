import { useState } from "react"

const useTime = () => {
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();
    const [hours, setHours] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    let updateTime = () => {
        const now = new Date();
        setDay(now.getDay());
        setDate(now.getDate());
        setMonth(now.getMonth() + 1);
        setYear(now.getFullYear());
        setHours(now.getHours());
        setMinute(now.getMinutes());
        setSecond(now.getSeconds());
    }
    setInterval(() => {
        updateTime()
    }, 1000);

    return [day, date, month, year, hours, minute, second]
}

export default useTime;