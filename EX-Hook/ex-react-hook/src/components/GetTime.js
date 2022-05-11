import useTime from "./Clockhook";

export default function GetTime () {
    const [day, date, month, year, hours, minute, second] = useTime();
    return (
        <div>
            <h1> Thứ {day}, Ngày {date} tháng {month} Năm {year} </h1>
            <h2> {hours} : {minute} : {second} </h2>
        </div>
    )
}