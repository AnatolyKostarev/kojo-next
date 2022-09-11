import Link from "next/link";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <nav style={{ display: "flex", columnGap: "20px" }}>
          <Link href="/">
            <a>MAIN PAGE</a>
          </Link>
          <Link href="/works">
            <a>WORKS</a>
          </Link>
          <Link href="/services">
            <a>SERVICES</a>
          </Link>
          <Link href="/contacts">
            <a>CONTACTS</a>
          </Link>
        </nav>
      </Header>
      {children}
    </>
  );
};

export default Layout;
