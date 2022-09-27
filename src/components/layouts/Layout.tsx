import React from "react";

import greets from "@/lib/greets";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

let sayHi = false;

const Layout = ({ children }: { children: React.ReactNode }) => {
  if (!sayHi) {
    greets();
    sayHi = true;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
