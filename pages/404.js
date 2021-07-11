import Link from "next/link";
import Layout from "../components/layout";

export default function ErrorPage() {
  return (
    <Layout>
      <div className="container text-center">
        <h1>404</h1>
        <p>Page not found.</p>

        <img src="https://i.giphy.com/media/3qDfYxxBcAeRO/giphy.webp" />

        <div>
          <Link href="/">
            <h6>return</h6>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
