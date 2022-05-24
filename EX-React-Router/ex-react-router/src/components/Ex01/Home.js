import { useLocation } from "react-router-dom";

const Home = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div>
            <h3> Email: {state.categoryUser}</h3>
        </div>
    )
}
export default Home;