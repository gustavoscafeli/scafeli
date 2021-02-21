import Link from "next/link";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <>
      <div class="text-center content-center mt-10 md:mt-20">
        <Link href="/">
          <a>
            <Image
              src="/avatar.jfif"
              alt="Gustavo Scafeli"
              width={150}
              height={150}
              class="rounded-full h-24 w-24 flex items-center"
            />
          </a>
        </Link>
      </div>
    </>
  );
}
