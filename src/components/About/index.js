import React from 'react';
import coverImage from "../../assets/IMG_4829.JPEG";

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;