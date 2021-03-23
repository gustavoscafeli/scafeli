import Link from "next/link";
import Image from "next/image";

import * as Icon from "react-feather";

export default function Header() {
  return (
    <>
      <div className="nav-fade"></div>
      <header>
        <div className="menu">
          <img className="s__logo" src="../../s-logo.svg" />
        </div>

        <Link href="/">
          <a className="name">Gustavo Scafeli</a>
        </Link>

        <a href="mailto:gustavoscafeli@gmail.com">Contato</a>
      </header>
    </>
  );
}
