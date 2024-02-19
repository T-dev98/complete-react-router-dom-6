import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
    return(
        <section className="section">
            <h2>Products</h2>
            <div className="Products">
                {products.map((product) => (
                    <article key={product.id}>
                        <h5>{product.name}</h5>
                        {/* navigate to singleProduct page */}
                        <Link to={`/products/${product.id}`}>more info</Link>
                    </article>
                ))}
            </div>
        </section>        
    )
}
export default Products;