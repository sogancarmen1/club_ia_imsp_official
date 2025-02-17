""
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footbar() {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="d-inline-block mb-3">
              <h1 className="text-white">
                AI<span className="text-primary">.</span>Tech
              </h1>
            </a>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor
            </p>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="me-3"
                width={13}
              />
              123 Street, New York, USA
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-3" width={13} />
              +012 345 67890
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-3" width={13} />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white"
                  width={13}
                />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white"
                  width={10}
                />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white"
                  width={15}
                />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white"
                  width={15}
                />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-white"
                  width={15}
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <h5 className="text-white mb-4">Popular Link</h5>
            <a className="btn btn-link" href="">
              About Us
            </a>
            <a className="btn btn-link" href="">
              Contact Us
            </a>
            <a className="btn btn-link" href="">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="">
              Terms & Condition
            </a>
            <a className="btn btn-link" href="">
              Career
            </a>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
            <h5 className="text-white mb-4">Our Services</h5>
            <a className="btn btn-link" href="">
              Robotic Automation
            </a>
            <a className="btn btn-link" href="">
              Machine learning
            </a>
            <a className="btn btn-link" href="">
              Predictive Analysis
            </a>
            <a className="btn btn-link" href="">
              Data Science
            </a>
            <a className="btn btn-link" href="">
              Robot Technology
            </a>
          </div>
        </div>
      </div>
      <div className="container wow fadeIn" data-wow-delay="0.1s">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
