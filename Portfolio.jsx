import React from 'react';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='nav'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://themewagon.github.io/MiniStore/images/main-logo.png" />
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Watch
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sale
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>

              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Page
                </a>
              </li>
            </ul>
            <i class="bi bi-search"></i>
            <i class="bi bi-person-fill"></i>
            <i class="bi bi-bag"></i>
          </div>
        </div>
      </nav>

      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner w-100 h-400">
          <div className="carousel-item active ">
            <img src="https://westernwatches.com/cdn/shop/files/Watch_banner_4_692b70f9-3c3c-4810-8d57-b763cfca9980.jpg?v=1736376680&width=1500" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item  ">
            <img src="https://img.pikbest.com/origin/06/43/44/88JpIkbEsTsAQ.jpg!w700wp" className="d-block w-100" alt="..." />
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container" id='card'>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
          <div className="col">
            <div className="card">

              <div className="card-body">
                <h5 className="card-title "><i class="bi bi-basket3"></i>Free delivery</h5>
                <p className="card-text">
                  Consectetur adipi elit lorem ipsum <br></br>  dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">

              <div className="card-body">
                <h5 className="card-title"> <i class="bi bi-award-fill"></i>Quality guarantee</h5>
                <p className="card-text">
                  Dolor sit amet orem ipsu mcons <br></br> ectetur adipi elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">

              <div className="card-body">
                <h5 className="card-title"> <i class="bi bi-tag-fill"></i>Daily offers</h5>
                <p className="card-text">
                  Amet consectetur adipi elit loreme <br></br> ipsum dolor sit.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">

              <div className="card-body">
                <h5 className="card-title"> <i class="bi bi-browser-chrome"></i>100% secure payment</h5>
                <p className="card-text">
                  Rem Lopsum dolor sit amet, <br></br> consectetur adipi elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Mobile Products</h3>
      <div class="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/product-item2.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card h-100" >
              <img src="https://themewagon.github.io/MiniStore/images/product-item3.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/product-item4.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/product-item5.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
        </div>
      </div>
      <h3>Smart Watches</h3>

      <div class="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
          <div className="col">
            <div className="card">
              <img src="https://themewagon.github.io/MiniStore/images/product-item6.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://themewagon.github.io/MiniStore/images/product-item7.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://themewagon.github.io/MiniStore/images/product-item8.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://themewagon.github.io/MiniStore/images/product-item9.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
        </div>


      </div>


      <div class="container" id='banner' >
        <div className="row mt-5 ">
          <div className="col-sm-6 mb-3 mb-sm-0 ">
            <div className="card">
              <div className="card-body">
                <h5>10% off</h5>
                <h1>New year <br></br> sale</h1>
                <button type="button" class="btn btn-secondary ">SHOP SALE</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="card">
              <div className="card-body w-100% ">
                <img src="https://themewagon.github.io/MiniStore/images/insta-item3.jpg" className="card-img-top" alt="..." />

              </div>
            </div>
          </div>
        </div>


      </div>
      <h3>Latest Posts</h3>
      <div class="container " id='latest'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/post-item1.jpg" className="card-img-top" alt="..." />


              <p>feb 22, 2023 - Gadgets</p>
              <h5>Technology Hack You Won't Get</h5>



            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/post-item2.jpg" className="card-img-top" alt="..." />
              <p>feb 22, 2023 - Camera</p>
              <h5>Technology Hack You Won't Get</h5>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/post-item3.jpg" className="card-img-top" alt="..." />
              <p>feb 25, 2023 - Technology</p>
              <h5>Technology Hack You Won't Get</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 text-center" id="que">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h4 class="text-center">"Neque porro quisquam est qui dolorem ipsum <br></br> quia dolor sit amet, consectetur, adipisci velit..." <br></br>
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </h4>
            </div>
            <div className="carousel-item">
              <h4 class="text-center">"Neque porro quisquam est qui dolorem ipsum <br></br> quia dolor sit amet, consectetur, adipisci velit..." <br></br>
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </h4>
            </div>
            <div className="carousel-item">
              <h4 class="text-center">"Neque porro quisquam est qui dolorem ipsum <br></br> quia dolor sit amet, consectetur, adipisci velit..." <br></br>
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              </h4>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <h3 class="text-center">Shop Our Insta</h3>
      <div class="container " id='shop'>
        <div className="row row-cols-1 row-cols-md-4 g-2 mt-3">
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/insta-item1.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/insta-item2.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/insta-item3.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://themewagon.github.io/MiniStore/images/insta-item4.jpg" className="card-img-top" alt="..." />

            </div>
          </div>
        </div>

      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Logo + About */}
            <div className="col-md-3">
              <h4>MiniStore.</h4>
              <p className="text-muted">
                Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
                Gravida massa volutpat aenean odio erat nullam fringilla.
              </p>
              <div className="social-icons">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
                <i className="fab fa-twitter" />
                <i className="fab fa-linkedin-in" />
                <i className="fab fa-youtube" />
              </div>
            </div>
            {/* Quick Links */}
            <div className="col-md-3">
              <h5>QUICK LINKS</h5>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Shop</a>
              <a href="#">Blogs</a>
              <a href="#">Contact</a>
            </div>
            {/* Help */}
            <div className="col-md-3">
              <h5>HELP &amp; INFO HELP</h5>
              <a href="#">Track Your Order</a>
              <a href="#">Returns Policies</a>
              <a href="#">Shipping + Delivery</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQs</a>
            </div>
            {/* Contact */}
            <div className="col-md-3">
              <h5>CONTACT US</h5>
              <p className="text-muted">Do you have any queries or suggestions?</p>
              <p>
                <strong>yourinfo@gmail.com</strong>
              </p>
              <p className="text-muted">If you need support? Just give us a call.</p>
              <p>
                <strong>+55 111 222 333 44</strong>
              </p>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="row bottom-bar text-center text-md-start align-items-center">
            <div className="col-md-6">
              <p>
                We ship with: <strong>DHL</strong>
              </p>
            </div>
            <div className="col-md-3 text-center">
              <p>
                Payment options:
                <i className="fab fa-cc-visa" />
                <i className="fab fa-cc-mastercard" />
                <i className="fab fa-paypal" />
              </p>
            </div>
            <div className="col-md-3 text-md-end text-center">
              <p>© 2023 MiniStore. Design by TemplatesJungle</p>
            </div>
          </div>
        </div>
      </footer>

    </>

  )





}
