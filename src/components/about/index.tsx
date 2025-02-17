import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

export default function About () {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <Image
                width={500}
                height={300}
                alt=""
                className="img-fluid"
                src="/img/about-img.jpg"
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              About Us
            </div>
            <h1 className="mb-4">
              We Make Your Business Smarter with Artificial Intelligence
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <p className="mb-4">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor.
            </p>
            <div className="row g-3">
              <div className="col-sm-6">
                <h6 className="mb-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                    width={15}
                  />
                  Award Winning
                </h6>
                <h6 className="mb-0">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                    width={15}
                  />
                  Professional Staff
                </h6>
              </div>
              <div className="col-sm-6">
                <h6 className="mb-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                    width={15}
                  />
                  24/7 Support
                </h6>
                <h6 className="mb-0">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                    width={15}
                  />
                  Fair Prices
                </h6>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <a className="btn btn-primary rounded-pill px-4 me-3" href="">
                Read More
              </a>
              <a
                className="btn btn-outline-primary rounded-pill btn-square me-3"
                href=""
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-primary"
                  width={13}
                />
              </a>
              <a
                className="btn btn-outline-primary rounded-pill btn-square me-3"
                href=""
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-primary"
                  width={18}
                />
              </a>
              <a
                className="btn btn-outline-primary rounded-pill btn-square me-3"
                href=""
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-primary"
                  width={14}
                />
              </a>
              <a
                className="btn btn-outline-primary rounded-pill btn-square"
                href=""
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-primary"
                  width={14}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
