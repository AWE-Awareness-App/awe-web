import React from "react";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

interface LayoutProps {
  children: React.ReactNode;
  activePage: string; // Determines which nav item is highlighted
}

const Layout: React.FC<LayoutProps> = ({ children, activePage }) => {
  return (
    <div className="font-sans">
      <NavBar logoPath="/images/AWE-1.jpg" activePage={activePage} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
