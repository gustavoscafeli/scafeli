import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="error__page">
      <div className="content">
        <h1>¯\_(ツ)_/¯</h1>
        <p>A página que você está procurando não existe.</p>
        <Link href="/">
          <a>Clique aqui para voltar</a>
        </Link>
      </div>
    </div>
  );
}
