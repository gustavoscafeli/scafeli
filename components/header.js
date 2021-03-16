import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                Gustavo Scafeli
              </a>
              {/* <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button> */}
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Projects
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Blog
                    </a>
                  </li> */}
                </ul>
                {/* <div>
                  <a className="btn-header" href="/">
                    Get in touch
                  </a>
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
