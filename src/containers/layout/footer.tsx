import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-200 p-2">
      <p>Copyright © {new Date().getFullYear()} Xerox</p>
    </footer>
  );
};

export default Footer;
