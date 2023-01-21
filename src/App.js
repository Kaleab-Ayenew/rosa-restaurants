import "./App.css";

function App() {
  return (
    <div>
      <header>
        <span class="logo-img">
          <img
            src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988515/logo-rosa-white.png"
            alt="logo"
          />
        </span>
        <div class="nav-list">
          <a href="#">Home</a>
          <a href="#">Reservations</a>
          <a href="#">Menu</a>
          <a href="#">Blog</a>
          <a href="#">Features</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>
        <span class="menu">
          <i class="fa-solid fa-bars"></i>
        </span>
      </header>

      <div class="background-canvas"></div>

      <div class="header-canvas-window">
        <div>
          <span>Welcome</span>
          <span>THE ROSA</span>
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
            Rosa is a restaurant, bar and coffee roastery located on a busy
            corner site in Farringdon{"’"}s Exmouth Market. With glazed frontage
            on two sides of the building, overlooking the market and a bustling
            London intersection.
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
            For those with pure food indulgence in mind, come next door and sate
            your desires with our ever changing internationally and seasonally
            inspired small plates. We love food, lots of different food, just
            like you.
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
            We promise an intimate and relaxed dining experience that offers
            something different to local and foreign patrons and ensures you
            enjoy a memorable food experience every time.
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
          <h2>About Rosa</h2>
          <i class="fas fa-asterisk"></i>
          <p>
            ROSA is an enchanting and easy-to-use parallax Restaurant WordPress
            theme that allows you to tell your story in a dynamic, narrative and
            enjoyable way, making it perfect for restaurants, bakeries, bars or
            coffee shops.
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
            <span>© ROSA 2017</span>
            <span>13 Hanway Square, London</span>
            <span>Tel: 71494563</span>
            <span>Handcrafted with love by Pixelgrade Team</span>
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
