import { useNavigate } from "react-router-dom";

const Category = () => {
    let navigate = useNavigate();
    const sentDataToProduct = (event) => {
        navigate("/product",{state : {categoryId : event.target.value}});
    };
    return (
        <div className="container pt-5 text center">
            <h2> Select a Category: </h2>
            <select class="form-select" defaultValue='default' onChange={(e) => sentDataToProduct(e)}>
                <option value='default' disabled hidden> Choose Your Car </option>
                <option value='1'> Mercedes </option>
                <option value='2'> Ferrari </option>
                <option value='3'> Lamborghini </option>
            </select>
        </div>
    )
}
export default Category;