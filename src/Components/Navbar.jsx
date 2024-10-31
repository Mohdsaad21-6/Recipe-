import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState ,} from "react";

const Navbar = () => {

const navigate =useNavigate();
  const [input, setInput] = useState("")


  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/search/${input}`)

  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body  fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
        <Link to="/" style={{textDecoration:"none"}}>
          <a
            className="navbar-brand"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              color: "pink",
              fontStyle: "italic",
            }}
            href="#"
          >
            TastyTreasures
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse   float-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"53%"}}>
              <Link
                className="nav-item"
                style={{ textDecoration: "none" }}
                to={`/category/indian`}
              >
                <a className="nav-link active">India</a>
              </Link>
              <Link className="nav-item" style={{ textDecoration: "none" }}
              to={`/category/american`}
              >
                <a className="nav-link active" aria-current="page" href="#">
                  American
                </a>
              </Link>
              <Link className="nav-item" style={{ textDecoration: "none" }}
              to={`/category/british`}
              >
                <a className="nav-link active" aria-current="page" href="#">
                  British
                </a>
              </Link>
              <Link className="nav-item" style={{ textDecoration: "none" }}
              to={`/category/chinese`}>
                <a className="nav-link active" aria-current="page" href="#">
                  Chinese
                </a>
              </Link>
              <Link className="nav-item" style={{ textDecoration: "none" }}
              to={`/category/thai`}>
                <a className="nav-link active" aria-current="page" href="#">
                  Thai
                </a>
              </Link>
            </ul>
            <form className="d-flex" role="search">
              <input
              onChange={(e)=>setInput(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
