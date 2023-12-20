import React from 'react';
import profile from "../Assets/profil.jpg"

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="aboutIcon">
        <img src={profile} alt="photoAbout" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Beginner Of Software Engineering</h4>
        <p>
          Software engineer pemula yang bersemangat untuk belajar dan mengembangkan keterampilan di bidang UI/UX. 
          Saya memiliki pengalaman menggunakan alat dan framework UI/UX, serta mengembangkan aplikasi mobile dan web. 
          Saya ingin bekerja di perusahaan teknologi yang dapat membantu saya mewujudkan passion saya untuk menciptakan produk digital yang user-friendly dan menarik.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
