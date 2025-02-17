import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Testimonial() {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Testimonial
            </div>
            <h1 className="mb-4">What Say Our Clients!</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <a className="btn btn-primary rounded-pill px-4" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel testimonial-carousel border-start border-primary">
              <div className="testimonial-item ps-5">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-primary mb-3"
                  width={30}
                />
                <p className="fs-4">
                  Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
                  et sit, sed stet no labore lorem sit. Sanctus clita duo justo
                  et tempor eirmod magna dolore erat amet
                </p>
                <div className="d-flex align-items-center">
                  <Image
                    width={60} // Largeur en pixels
                    height={60}
                    alt=""
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src="/img/testimonial-1.jpg"
                    // style="width: 60px; height: 60px;"
                  />
                  <div className="ps-3">
                    <h5 className="mb-1">Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item ps-5">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-primary mb-3"
                  width={30}
                />
                <p className="fs-4">
                  Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
                  et sit, sed stet no labore lorem sit. Sanctus clita duo justo
                  et tempor eirmod magna dolore erat amet
                </p>
                <div className="d-flex align-items-center">
                  <Image
                    width={60} // Largeur en pixels
                    height={60}
                    alt=""
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src="/img/testimonial-2.jpg"
                    // style="width: 60px; height: 60px;"
                  />
                  <div className="ps-3">
                    <h5 className="mb-1">Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item ps-5">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-primary mb-3"
                  width={30}
                />
                <p className="fs-4">
                  Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
                  et sit, sed stet no labore lorem sit. Sanctus clita duo justo
                  et tempor eirmod magna dolore erat amet
                </p>
                <div className="d-flex align-items-center">
                  <Image
                    width={60} // Largeur en pixels
                    height={60}
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src="/img/testimonial-3.jpg"
                    alt=""
                    // style="width: 60px; height: 60px;"
                  />
                  <div className="ps-3">
                    <h5 className="mb-1">Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
