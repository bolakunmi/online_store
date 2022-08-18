import React, { useState } from "react";
import { Link } from "react-router-dom";

// probably trqansfer the help to the sidebar and check why the topnav bar isnt wrapping
const Header = () => {
  const [navstatus, setNavstatus] = useState(false);

  return (
    <header>
      <div style={{ marginBottom: "10px" }}>
        <nav className="navbar">
          <div className="topbar">
            <button
              type="button"
              onClick={() => setNavstatus(!navstatus)}
              className="sidebar_toggle"
            >
              <img
                src={require("./images/more.png")}
                alt="toggle"
                style={{ display: navstatus ? "none" : " block" }}
              />
              <img
                src={require("./images/close.png")}
                alt="toggle"
                style={{ display: navstatus ? "block" : " none" }}
              />
            </button>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              <span style={{ cursor: "pointer" }}>KEENEST</span>
            </Link>
          </div>

          <ul className="topbar_right">
            <li>
              <div className="topbar_right_search">
                <img alt="search" src={require("./images/search.png")} />
                <input
                  type="text"
                  placeholder="search products, brands, categories..."
                />
                {/* work on this search button */}
                <button type="button" style={{ cursor: "pointer" }}>
                  search
                </button>
              </div>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <div className="dropdown">
                <button className="dropdown_button">
                  <img src={require("./images/profile.png")} alt="profile" />
                  <span className="topbar_right_title">Account</span>

                  <img
                    src={require("./images/expand.png")}
                    alt="expand"
                    style={{ width: "15px", height: "15px" }}
                  />
                </button>
                <div className="dropdown-content">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="#"
                    style={{ background: "#00a4bd", cursor: "pointer" }}
                  >
                    <button className="signup_button">
                      <img src={require("./images/signup.png")} alt="Sign Up" />
                      Sign Up
                    </button>
                    {/* add shadow to the button etc */}
                  </a>
                  <hr />

                  <a rel="noopener" target="_blank" href="#">
                    Login
                  </a>

                  <a
                    rel="noopener"
                    target="_blank"
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0px",
                    }}
                  >
                    <img
                      src={require("./images/favourite2.png")}
                      alt="liked"
                      style={{ width: "15px", height: "15px" }}
                    />
                    Favourites
                  </a>
                </div>
              </div>
            </li>

            <li className="topbar_right_title">
              <div className="dropdown">
                <button className="dropdown_button">
                  <img src={require("./images/help.png")} alt="profile" />
                  <span>Help</span>

                  <img
                    src={require("./images/expand.png")}
                    alt="expand"
                    style={{ width: "15px", height: "15px" }}
                  />
                </button>
                <div className="dropdown-content">
                  <a rel="noopener" target="_blank" href="#">
                    Help Center
                  </a>

                  <a rel="noopener" target="_blank" href="#">
                    Place and Track order
                  </a>

                  <a rel="noopener" target="_blank" href="#">
                    Order Cancellation
                  </a>

                  <a rel="noopener" target="_blank" href="#">
                    Returns and Refunds
                  </a>

                  <a rel="noopener" target="_blank" href="#">
                    Payments and Accounts
                  </a>
                  <a rel="noopener" target="_blank" href="#">
                    <button>
                      <img src={require("./images/chat.png")} alt="Chat" />
                      Live Chat
                    </button>
                    {/* add shadow to the button etc */}
                  </a>
                </div>
              </div>
            </li>

            <Link
              to={"/cart"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li style={{ display: "flex", alignItems: "center" }}>
                <button>
                  <img alt="cart" src={require("./images/cart.gif")} />
                  {/* this should be a link to cart page */}
                </button>
                <span className="topbar_right_title">Cart</span>
              </li>
            </Link>
          </ul>
        </nav>
        <div className="topbar_right_search_mini">
          <img alt="search" src={require("./images/search.png")} />
          <input
            type="text"
            placeholder="search products, brands, categories..."
          />
          {/* work on this search button */}
          <button type="button" style={{ cursor: "pointer" }}>
            search
          </button>
        </div>
      </div>
      {/* probably try hovering it instead of seleceting */}
      {/* <nav className="sidebar">
          <ul>
            <li>Men fashion</li>
            <li>Women fashion</li>
            <li>Electronics</li>
            <li>Supermarket</li>
            <li>Watches</li>
            <li>Cars</li>
          </ul>
        </nav> */}
      {navstatus && (
        <nav className="sidebar">
          <ul>
            <li>Men fashion</li>
            <li>Women fashion</li>
            <li>Electronics</li>
            <li>Supermarket</li>
            <li>Watches</li>
            <li>Cars</li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img src={require("./images/favourite2.png")} alt="profile" />
              Favourites
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img src={require("./images/help.png")} alt="profile" />
              Help
            </li>

            <a
              href="https://bolakunmiprofile.netlify.app/"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={require("./images/profile.png")} alt="profile" />
                About Developer
              </li>
            </a>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
