import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./Employee";
import EmployeeDetails from "./EmployeeDetail";
import Login from "./Login";

const Home = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/employee" element={<Employee />}></Route>
                <Route path="/employeeDetails" element={<EmployeeDetails />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Home;