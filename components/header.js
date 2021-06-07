import Link from "next/link";

import * as Icon from "react-feather";

export default function Header() {
  return (
    <>
      <header>
        <Link href="/">
          <a className="name">Scafeli</a>
        </Link>

        <div className="social">
          <ul>
            <li>
              <a href="https://instagram.com/gustavoscafeli" target="_blank">
                <Icon.Instagram strokeWidth="1.2" />
              </a>
            </li>

            <li>
              <a href="https://github.com/Scafeli" target="_blank">
                <Icon.GitHub strokeWidth="1.2" />
              </a>
            </li>

            <li>
              <a
                href="https://open.spotify.com/playlist/2pyh0HmN7slLDoeky6aNIt?si=GkqlN2GkQnidcsMJFuvorg"
                target="_blank"
              >
                <Icon.Headphones strokeWidth="1.2" />
              </a>
            </li>

            <li>
              <a href="mailto:gustavoscafeli@gmail.com">
                <Icon.Mail strokeWidth="1.2" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
