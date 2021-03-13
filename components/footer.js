import * as Icon from "react-feather";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-4">
              <p></p>
              <a className="btn-header" href="/">
                Entre em contato
              </a>
            </div>

            <div className="col-md-5">
              <ul className="menu-footer">
                <li>
                  <a
                    href=""
                    className="d-flex justify-content-between align-items-center"
                  >
                    Tem uma ótima ideia de produto? <Icon.ChevronRight />
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="d-flex justify-content-between align-items-center"
                  >
                    Precisa ampliar a sua equipe? <Icon.ChevronRight />
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="d-flex justify-content-between align-items-center"
                  >
                    Quer trabalhar no Scafeli? <Icon.ChevronRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
