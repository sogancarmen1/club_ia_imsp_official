import Link from "next/link";

export default function NavBar() {
  return (
    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <a href="index.html" className="navbar-brand">
            <h1 className="text-white">
              AI<span className="text-dark">.</span>Tech
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link href="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link href="/about" className="nav-item nav-link">
                About
              </Link>
              <Link href="/service" className="nav-item nav-link">
                Services
              </Link>
              <Link href="/project" className="nav-item nav-link">
                Projects
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu bg-light mt-2">
                  <a href="feature.html" className="dropdown-item">
                    Features
                  </a>
                  <Link href="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link href="/faq" className="dropdown-item">
                    FAQs
                  </Link>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            {/* <butaton
                type="button"
                class="btn text-white p-0 d-none d-lg-block"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i class="fa fa-search"></i>
              </butaton> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
