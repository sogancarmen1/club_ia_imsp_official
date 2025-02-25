import Image from "next/image";
import Link from "next/link";

interface TitleProps {
  pageName: string;
  text?: string;
  links: string;
}

const HeaderSecond: React.FC<TitleProps> = ({ pageName, text, links }) => {
  return (
    <div className="container-fluid pt-5 bg-primary hero-header">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <h1 className="display-20 text-white mb-4 animated slideInRight">
              {pageName}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-white" href="/">
                    Acceuil
                  </Link>
                </li>
                {text && (
                  <li className="breadcrumb-item">
                    <Link className="text-white" href={links}>
                      {text}
                    </Link>
                  </li>
                )}
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  {pageName}
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6 align-self-end text-center text-lg-end">
            <Image
              height={300}
              width={300}
              className="img-fluid"
              src="/img/hero-img.png"
              alt=""
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSecond;
