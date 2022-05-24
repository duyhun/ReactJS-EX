import { useParams } from "react-router-dom";

const Product = () => {
    let { categoryId } = useParams();
    return(
        <div className="container text-center">
            <h3> Id selected {categoryId} </h3>
        </div>
    )
}
export default Product;