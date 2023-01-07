import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
