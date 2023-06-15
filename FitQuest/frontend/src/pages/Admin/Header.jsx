import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="header-container">
      <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
        <Link className="navbar-brand me-lg-5" to={{ pathname: "/" }}>
          <img
            className="navbar-brand-dark"
            src="../assets/logo.png"
            alt="fitQuest logo"
          />{" "}
          <img
            className="navbar-brand-light"
            src="../../assets/img/dark.svg"
            alt="fitQuest logo"
          />
        </Link>
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler d-lg-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <nav
        id="sidebarMenu"
        className="sidebar d-lg-block bg-gray-800 text-white"
        data-simplebar
      >
        <div className="sidebar-inner px-4 pt-3">
          <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div className="d-flex align-items-center">
              <div className="avatar-lg me-4">
                <img
                  src="assets/img/profile-picture-3.jpg"
                  className="card-img-top rounded-circle border-white"
                  alt="Rohit Kumar"
                />
              </div>
              <div className="d-block">
                <h2 className="h5 mb-3">Hi, Jane</h2>
                <a
                  href="."
                  className="btn btn-secondary btn-sm d-inline-flex align-items-center"
                >
                  <svg
                    className="icon icon-xxs me-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  Sign Out
                </a>
              </div>
            </div>
            <div className="collapse-close d-md-none">
              <a
                href="#sidebarMenu"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <svg
                  className="icon icon-xs"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <ul className="nav flex-column pt-3 pt-md-0">
            <li className="nav-item mb-3">
              <a href="." className="nav-link d-flex align-items-center">
                <span className="sidebar-icon">
                  <img
                    src={Logo}
                    height="100%"
                    width="100%"
                    alt="fitQuest Logo"
                  />{" "}
                </span>
                {/* <span className="mt-1 ms-1 sidebar-text">Medicare Admin</span> */}
              </a>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to={{ pathname: "/admin" }}
                style={{ display: "flex" }}
              >
                <span className="sidebar-icon">
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </span>
                <span className="sidebar-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to={{ pathname: "/product-list" }}
                style={{ display: "flex" }}
              >
                <span className="sidebar-icon">
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="sidebar-text">Workout List</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to={{ pathname: "/add-product" }}
                style={{ display: "flex" }}
              >
                <span className="sidebar-icon">
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="sidebar-text">Add Product</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to={{ pathname: "/user-list" }}
                style={{ display: "flex" }}
              >
                <span className="sidebar-icon">
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                </span>
                <span className="sidebar-text">User List</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to={{ pathname: "/order-list" }}
                style={{ display: "flex" }}
              >
                <span className="sidebar-icon">
                  <svg
                    className="icon icon-xxs text-gray-400 me-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="sidebar-text">Track List</span>
              </Link>
            </li>

            {/* <li className="nav-item">
              <span
                className="nav-link collapsed d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-pages"
              >
                <span>
                  <span className="sidebar-icon">
                    <svg
                      className="icon icon-xs me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clip-rule="evenodd"
                      ></path>
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                    </svg>
                  </span>
                  <span className="sidebar-text">Page examples</span>
                </span>
                <span className="link-arrow">
                  <svg
                    className="icon icon-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <div
                className="multi-level collapse"
                role="list"
                id="submenu-pages"
                aria-expanded="false"
              >
                <ul className="flex-column nav">
                  <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/sign-in" }}>
                      <span className="sidebar-text">Sign In</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/sign-up" }}>
                      <span className="sidebar-text">Sign Up</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/forgotpassword" }}>
                      <span className="sidebar-text">Forgot password</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/resetpassword" }}>
                      <span className="sidebar-text">Reset password</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
