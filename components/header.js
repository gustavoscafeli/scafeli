import Link from "next/link";
import Image from "next/image";

import * as Icon from "react-feather";

export default function Header() {
  return (
    <>
      <header>
        {/* <div className="menu">
          <img className="s__logo" src="../../s-logo.svg" />
        </div> */}

        <Link href="/">
          <a className="name">
            <img src="/scafeli-logo.svg" />
          </a>
        </Link>

        <div className="social">
          <ul>
            <li>
              <a href="https://instagram.com/gustavoscafeli" target="_blank">
                <Icon.Instagram stroke-width="1.2" />
              </a>
            </li>

            <li>
              <a href="https://github.com/Scafeli" target="_blank">
                <Icon.GitHub stroke-width="1.2" />
              </a>
            </li>

            <li>
              <a
                href="https://open.spotify.com/playlist/2pyh0HmN7slLDoeky6aNIt?si=GkqlN2GkQnidcsMJFuvorg"
                target="_blank"
              >
                <Icon.Headphones stroke-width="1.2" />
              </a>
            </li>

            <li>
              <a href="mailto:gustavoscafeli@gmail.com">
                <Icon.Mail stroke-width="1.2" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
