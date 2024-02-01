import { Link } from "react-router-dom";
import PRODUCTS from "../data.js";
import { fetchProducts } from "../Api/productApi.js";
import { useEffect, useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      let { data } = await fetchProducts();
      setProductData(data);
    };

    fetchAllProducts();
  }, []);
  console.log("productData", productData);
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-lg-7">
              <h1>Products</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Products</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row products-row">
          {productData.map((product) => {
            return (
              <div className="col-lg-4" key={product.id}>
                <div className="card">
                  <div
                    className="img-wrap"
                    style={{
                      background: "#ffffff",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={product.image}
                      style={{
                        width: "100%",
                        objectFit: "contain",

                        // maxWidth: "200px",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    {product.name}
                    <p
                      className="card-text"
                      style={{
                        height: "200px",
                        overflowY: "auto",
                      }}
                    >
                      {product.description}
                    </p>
                    <div className="d-flex justify-content-between align-item-center">
                      <span>
                        Price:{" "}
                        <strong className="price"> {product.price}</strong>
                      </span>
                      <Link 
                        to={`/products/${product.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        DETAILS &#8594;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default Products;
