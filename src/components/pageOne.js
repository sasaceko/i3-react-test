import React from "react";
import Image from "./pageOneComponents/image";

const PageOne = () => {
  const imgOne = "slika1.jpg";
  const imgTwo = "slika2.jpg";
  const imgThree = "slika3.jpg";
  return (
    <section className="row">
      <button>&larr;</button>
      <Image name={imgOne} />
      <Image name={imgTwo} />
      <Image name={imgThree} />
      <button>&rarr;</button>
    </section>
  );
};

export default PageOne;
