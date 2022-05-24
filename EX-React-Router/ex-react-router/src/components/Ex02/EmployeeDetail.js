import { useLocation } from "react-router-dom";

const EmployeeDetails = () => {
    const location = useLocation();
    return(
        <div>
            {location.state.id} - {location.state.name} -{location.state.age}
        </div>
    )
}
export default EmployeeDetails;