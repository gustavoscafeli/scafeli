import Footer from "./footer";
import Header from "./header";
// import Meta from "../components/meta";

export default function Layout({ children }) {
  return (
    <>
      {/* <Meta /> */}
      <Header />
      <div data-aos="fade" data-aos-duration="500">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
