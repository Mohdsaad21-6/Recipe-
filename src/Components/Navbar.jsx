import './Navbar.css'; 

const Navbar = () => {
  return (
    <>
      <nav

        className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body  fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  India
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Africa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Chinese
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
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
