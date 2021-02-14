import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <>
      <Link href="/">
        <a>
          <Image
            src="/avatar.jfif"
            alt="Gustavo Scafeli"
            width={150}
            height={150}
            className={styles.avatar}
          />
        </a>
      </Link>
    </>
  );
}
