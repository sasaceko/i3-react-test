import React from "react";

const CrueltyIcons = () => {
  return (
    <section className="img_section">
      <figure>
        <img className="cruelty_img" src="slika4.jpg" alt="slika4" />
        <figcaption>
          <b>Investing</b> over $440 million over 40 years in alternatives to
          animal testing.
        </figcaption>
      </figure>
      <figure>
        <img className="cruelty_img" src="slika5.jpg" alt="slika5" />
        <figcaption>
          <b>Partnering</b> with leading international animal welfare
          organizations, academia and industry.
        </figcaption>
      </figure>
      <figure>
        <img className="cruelty_img" src="slika6.jpg" alt="slika6" />
        <figcaption>
          <b>Advocating</b> for public use of non-animal methods and adoption by
          scientists.
        </figcaption>
      </figure>
    </section>
  );
};

export default CrueltyIcons;
