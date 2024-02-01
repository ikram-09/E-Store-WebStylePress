import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchSingleProduct } from "../Api/productApi.js";

  const SingleProducts = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSingleData = async () => {
      const { data } = await fetchSingleProduct(id);
      setData(data);
    };
    getSingleData();
  }, [id]);

  const navigate = useNavigate();

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-lg-7">
              <h1>{data.title}</h1>
            </div>
            <div className="col-lg-5">
              <div className="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {data.title}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5">
            <img src={data.image} alt={data.title} className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{data.title}</h2>
            <p className="price"><strong>${data.price}</strong></p>
            <p>{data.description}{data.description}{data.description}{data.description}</p>
            <br />
            <button className="btn btn-primary btn-sm" onClick={() => navigate(-1)}>BACK</button> &nbsp; 
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/products')}>NAVIGATE TO PRODUCTS</button> &nbsp;
            <Link to="/products" className="btn btn-primary btn-sm">PRODUCTS</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProducts;