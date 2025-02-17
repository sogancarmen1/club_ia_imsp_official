import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Feature() {
  return (
    <div className="container-fluid bg-primary feature pt-5">
      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
            data-wow-delay="0.3s"
          >
            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
              Why Choose Us
            </div>
            <h1 className="text-white mb-4">
              We're Best in AI Industry with 10 Years of Experience
            </h1>
            <p className="text-light mb-4">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor
            </p>
            <div className="d-flex align-items-center text-white mb-3">
              <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-primary"
                  width={15}
                />
              </div>
              <span>Diam dolor diam ipsum et tempor sit</span>
            </div>
            <div className="d-flex align-items-center text-white mb-3">
              <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-primary"
                  width={15}
                />
              </div>
              <span>Diam dolor diam ipsum et tempor sit</span>
            </div>
            <div className="d-flex align-items-center text-white mb-3">
              <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-primary"
                  width={15}
                />
              </div>
              <span>Diam dolor diam ipsum et tempor sit</span>
            </div>
            <div className="row g-4 pt-3">
              <div className="col-sm-6">
                <div
                  className="d-flex rounded p-3"
                  style={{ background: "rgba(256, 256, 256, 0.1)" }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-white"
                    width={50}
                  />
                  <div className="ms-3">
                    <h2 className="text-white mb-0" data-toggle="counter-up">
                      9999
                    </h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="d-flex rounded p-3"
                  style={{ background: "rgba(256, 256, 256, 0.1)" }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-white"
                    width={50}
                  />
                  <div className="ms-3">
                    <h2 className="text-white mb-0" data-toggle="counter-up">
                      9999
                    </h2>
                    <p className="text-white mb-0">Project Complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 align-self-end text-center text-md-end wow fadeIn"
            data-wow-delay="0.5s"
          >
            <Image
              className="img-fluid"
              width={500} // Largeur en pixels
              height={300}
              src="/img/feature.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
