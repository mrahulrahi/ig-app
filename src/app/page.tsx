import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header id="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="nav-inside d-flex align-items-center justify-content-between">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <span className="brand-logo">
                  <Image src="/images/logo.png" alt="Imagine Group" width={100} height={100}   />
                </span>
                <span className="brand-name">
                  Imagine <br /> Group
                </span>
              </a>

              <div className="collapse navbar-collapse" id="mainNav">
                <div className="navbar-inside mx-auto">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#!">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">Features</a></li>
                  </ul>

                  <div className="navbar-bottom d-lg-none text-center">
                    <a href="#" className="btn btn-default btn-block">Download</a>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex align-items-center">
                <a href="#" className="btn btn-default d-none d-lg-block">Download</a>

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </div>
  );
}
