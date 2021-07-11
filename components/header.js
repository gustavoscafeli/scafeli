import React from "react";
import Link from "next/link";

import * as Icon from "react-feather";
import UseAnimations from "react-useanimations";

import github from "react-useanimations/lib/github";
import instagram from "react-useanimations/lib/instagram";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link href="/">
              <a className="navbar-brand">Gustavo Scafeli</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/posts">
                    <a className="nav-link">Posts</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/works">
                    <a className="nav-link">Works</a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://instagram.com/gustavoscafeli"
                        target="_blank"
                      >
                        <UseAnimations animation={instagram} size={26} />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/gustavoscafeli"
                        target="_blank"
                      >
                        <UseAnimations animation={github} size={26} />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://open.spotify.com/playlist/2pyh0HmN7slLDoeky6aNIt?si=GkqlN2GkQnidcsMJFuvorg"
                        target="_blank"
                      >
                        <UseAnimations animation={linkedin} size={26} />
                      </a>
                    </li>

                    <li>
                      <a href="mailto:gustavoscafeli@gmail.com">
                        <UseAnimations animation={twitter} size={26} />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
