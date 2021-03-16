import * as Icon from "react-feather";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <p>I'm a lot cooler on social media</p>
              <ul className="menu-footer">
                <li>
                  <a
                    href="https://www.instagram.com/gustavoscafeli/"
                    target="_blank"
                  >
                    <Icon.Instagram />
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/scafeli" target="_blank">
                    <Icon.Twitter />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/scafeli" target="_blank">
                    <Icon.GitHub />
                  </a>
                </li>
              </ul>

              {/* <a className="btn-header" href="/">
                Get in touch
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
