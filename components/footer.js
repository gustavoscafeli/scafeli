// import Link from "next/link";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://github.com/gustavoscafeli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Gustavo Scafeli
        </a>
      </footer>
    </>
  );
}
