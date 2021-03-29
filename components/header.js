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
          <a className="name">Gustavo Scafeli</a>
        </Link>

        <Link href="mailto:gustavoscafeli@gmail.com">
          <a className="name">
            <Icon.Mail stroke-width="1.2" />
          </a>
        </Link>
      </header>
    </>
  );
}
