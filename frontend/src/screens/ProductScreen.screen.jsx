import { useParams } from "react-router-dom";


function ProductScreen() {

    const params = useParams();
console.log("params: ", params)
    const {slug} = params;

    return (
        <div>
            {slug}
        </div>
    )

}
export default ProductScreen;