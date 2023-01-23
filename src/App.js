import React from "react";
import "./App.css";
import Loader from "./Loader";

function App() {
  const headerRef = React.useRef();
  // const [isSticky, setIsSticky] = React.useState();
  const [menuExpanded, setMenuExpanded] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  window.onscroll = () => {
    if (window.scrollY > 200) {
      headerRef.current.classList.add("sticky");
    } else {
      headerRef.current.classList.remove("sticky");
    }
  };
  React.useEffect(() => {
    console.log(loading);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? <Loader /> : null}
      <header ref={headerRef}>
        <span className="logo-img">
          <img src={require("./images/new-logo.png")} alt="logo" />
        </span>
        <div class={`nav-list ${menuExpanded ? "expand" : ""}`}>
          <span>Menu</span>
          <a href="#">Home</a>
          <a href="#">Reservations</a>
          <a href="#">Menu</a>
          <a href="#">Blog</a>
          <a href="#">Features</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>
        <span class="menu">
          {!menuExpanded ? (
            <i
              onClick={() => {
                setMenuExpanded(true);
              }}
              className="fa-solid fa-bars"
            ></i>
          ) : (
            <i
              onClick={() => {
                setMenuExpanded(false);
              }}
              className="fa-solid fa-xmark"
            ></i>
          )}
        </span>
      </header>

      <div class="background-canvas"></div>

      <div
        // style={{
        //   backgroundImage: `url(${require("./images/background/header.jpg")})`,
        // }}
        class="header-canvas-window"
      >
        <div>
          <span>Welcome</span>
          <span>
            <i>`KAL`</i>
          </span>
          <span>Ready to be Opened</span>
          <span>Explore</span>
        </div>
      </div>

      <div class="content-section">
        <div class="content-box">
          <h1>Discover</h1>
          <h2>Our Story</h2>
          <i class="fas fa-asterisk"></i>
          <p>
            KAL is an Italian restaurant located in the heart of downtown San
            Francisco. We specialize in classic Italian dishes, from traditional
            pizzas to house-made pastas prepared with the freshest ingredients.
          </p>
          <a href="#">About Us</a>
        </div>
        <div class="content-box-img">
          <img
            src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988527/vertical-photo-1.jpg"
            alt="box-img"
          />
          <img
            src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988532/vertical-photo-2.jpg"
            alt="box-img"
          />
        </div>
      </div>

      <div id="r" class="canvas-window">
        <h1>Tastes</h1>
        <h2>Recipes</h2>
      </div>

      <div class="content-section sec-rev">
        <div class="content-box-img-grid">
          <span>
            <img
              src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988517/big-menu-thumb-1.jpg"
              alt="box-img"
            />
            <img
              src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988526/big-menu-thumb-2.jpg"
              alt="box-img"
            />
          </span>

          <span>
            <img
              src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988525/big-menu-thumb-4.jpg"
              alt="box-img"
            />

            <img
              src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988524/big-menu-thumb-6.jpg"
              alt="box-img"
            />
          </span>
        </div>

        <div class="content-box">
          <h1>Discover</h1>
          <h2>Menu</h2>
          <i class="fas fa-asterisk"></i>
          <p>
            Our menu features an array of house specialties and daily specials
            created by our talented chefs. The relaxed atmosphere of our cozy
            dining room is ideal for casual dinners and special occasions alike.
          </p>
          <a href="#">View The Full Menu</a>
        </div>
      </div>

      <div id="p" class="canvas-window">
        <h1>The Perfect</h1>
        <h2>Blend</h2>
      </div>

      <div class="content-section">
        <div class="content-box">
          <h1>Culinary</h1>
          <h2>Delight</h2>
          <i class="fas fa-asterisk"></i>
          <p>
            Our professional wait staff is always available to offer
            recommendations of wine pairings that highlight each dish's unique
            flavor. At KAL, we bring together the finest food and service for a
            truly memorable experience. Let your taste buds travel Italy without
            having to leave San Francisco!
          </p>
          <a href="#">Make a Reservation</a>
        </div>
        <div class="content-box-img">
          <img
            src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-1.jpg"
            alt="box-img"
          />
          <img
            src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-2.jpg"
            alt="box-img"
          />
        </div>
      </div>

      <footer>
        <div class="info-box">
          <h2>About KAL</h2>
          <i class="fas fa-asterisk"></i>
          <p>
            KAL is an Italian restaurant located in the heart of downtown San
            Francisco. We specialize in classic Italian dishes, from traditional
            pizzas to house-made pastas prepared with the freshest ingredients.
          </p>
        </div>

        <div class="contact-box">
          <div class="follow">
            <h2>Follow Along</h2>
            <span>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-linkedin"></i>
            </span>
          </div>

          <div class="news">
            <h2>News Letter</h2>
            <span>
              <input placeholder="Type Your Email" type="email" />
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div class="other-box">
          <div>
            <span>© KAL 2023</span>
            <span>Addis Ababa, Ethiopia</span>
            <span>Tel: +123-456-7890</span>
            <span>
              Handcrafted with love by{" "}
              <a style={{ color: "unset" }} href="https://kal-dev.com/">
                Kaleab Ayenew
              </a>
            </span>
          </div>

          <div>
            <span>PERMISSIONS AND COPYRIGHT</span>
            <span>CONTACT THE TEAM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
