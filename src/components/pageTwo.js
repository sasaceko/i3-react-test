import React from "react";
import CrueltySection from "./pageTwoComponents/crueltyText";
import CrueltyPicture from "./pageTwoComponents/crueltyPicture";

const PageTwo = () => {
  return (
    <section className="section">
      <CrueltySection />
      <CrueltyPicture />
    </section>
  );
};

export default PageTwo;
