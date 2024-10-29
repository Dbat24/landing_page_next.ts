"use client";
import React from "react";
import "react-tabs/style/react-tabs.css";

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import BusinessServices from "@/components/BusinessServices";
import Services from "@/components/Services";
import RecentCases from "@/components/RecentCases";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Customers from "@/components/Customers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="w-full justify-center items-center">
      <Header />
      <Landing />
      <BusinessServices />
      <Services />
      <RecentCases />
      <Team />
      <Blog />
      <Customers />
      <Contact />
      <Footer />
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
}
