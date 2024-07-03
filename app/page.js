"use client";

import React from "react";

// components
import Banner from "./components/landingpage/banner/Banner";
import Footer from "./components/landingpage/footer/Footer";
import LpHeader from "./components/landingpage/header/Header";
import Testimonial from "./components/landingpage/testimonial/Testimonial";
import RootLayout from "./layout";
import Questions from "./components/landingpage/faq/Questions";
import InfoCard from "./components/landingpage/InfoCard/InfoCard";
import EditorCard from "./components/landingpage/editorCard/EditorCard";
import SecurityCardSection from "./components/landingpage/securityCard/SecurityCardSection";
import OutroCard from "./components/landingpage/outroCard/OutroCard";

export default function LandingPage() {
  return (
    <>
      <RootLayout>
        <LpHeader />
        <Banner />
        <InfoCard />
        <EditorCard />
        <SecurityCardSection />
        <Testimonial />
        {/* <Features /> */}
        <Questions />
        <OutroCard />
        <Footer />
      </RootLayout>
    </>
  );
}

LandingPage.layout = "Blank";
