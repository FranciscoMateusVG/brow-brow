import React from "react";
import Avatar from "./avatar";
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { ImTable } from "react-icons/im";
import Footer from "./footer";
import SideDrawer from "./sideDrawer";
import Header from "./header";

interface ILayout {
  children: React.ReactElement;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

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
