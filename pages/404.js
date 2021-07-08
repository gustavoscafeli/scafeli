import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="container text-center">
      <h1>404</h1>
      <p>Página não encontrada.</p>

      <img src="https://i.giphy.com/media/3qDfYxxBcAeRO/giphy.webp" />

      <div>
        <Link href="/">
          <h6>voltar</h6>
        </Link>
      </div>
    </div>
  );
}
