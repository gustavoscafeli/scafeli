import Footer from "./footer";
import Header from "./header";
// import Meta from "../components/meta";

export default function Layout({ children }) {
  return (
    <>
      {/* <Meta /> */}
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
