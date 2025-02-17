import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faRobot,
  faGraduationCap,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
export default function Service() {
  return (
    <div className="container-fluid bg-light mt-5 py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Our Services
            </div>
            <h1 className="mb-4">
              Our Excellent AI Solutions for Your Business
            </h1>
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
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <FontAwesomeIcon
                          icon={faRobot}
                          className="text-primary"
                          width={40}
                        />
                      </div>
                      <h5 className="mb-3">Robotic Automation</h5>
                      <p>
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet lorem.
                      </p>
                      <a className="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <FontAwesomeIcon
                          icon={faPowerOff}
                          className="text-primary"
                          width={40}
                        />
                      </div>
                      <h5 className="mb-3">Machine learning</h5>
                      <p>
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet lorem.
                      </p>
                      <a className="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-md-4">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          className="text-primary"
                          width={40}
                        />
                      </div>
                      <h5 className="mb-3">Education & Science</h5>
                      <p>
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet lorem.
                      </p>
                      <a className="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <FontAwesomeIcon
                          icon={faBrain}
                          className="text-primary"
                          width={40}
                        />
                      </div>
                      <h5 className="mb-3">Predictive Analysis</h5>
                      <p>
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet lorem.
                      </p>
                      <a className="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
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
