import {
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="pg-header">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-7">
            <h1>Details</h1>
          </div>
          <div className="col-lg-5">
            <div className="breadcrumb">
              <ol className="breadcrumb justify-content-end">
                <li className="breadcrumb-item">
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  {" "}
                  <Link to={`/products/:id`}>Products</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page"></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
