import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </>
    );
  };
  
  export default MainLayout;