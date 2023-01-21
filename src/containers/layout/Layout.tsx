import React from "react";
import Footer from "./footer";
import SideDrawer from "./sideDrawer";
import Header from "./header";

interface ILayout {
  children: React.ReactElement;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <SideDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
