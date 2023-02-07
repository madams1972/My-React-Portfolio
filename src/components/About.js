import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Malissa Adams</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>I am a Full Stack web Devloper, Entrpreneur and Public Speaker.</p>
          </div>
          <div className="right_container mt-3">
            <img src="/img/me.jpeg" alt="" />
          </div>
          <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>Malissa Adams is a seasoned tech expert with a passion for the future of the internet. With years of experience in web development, she has been at the forefront of the Web 3.0 revolution. Malissa is dedicated to educating the next generation of tech-savvy individuals, teaching them the skills and knowledge they need to build the decentralized web. In her role as a Web 3.0 teacher, Malissa has created numerous courses, workshops, and online resources to help her students understand and utilize the latest web technologies. With her expert guidance, students can learn about decentralized systems, blockchain, smart contracts, and more, empowering them to build the web of tomorrow..</p>
        </div>
      </div>
    </>
  )
}

export default About