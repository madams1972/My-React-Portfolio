import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{ color: "#6c63ff" }}>Malissa Adams Site</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>I am a full stack web developer with an MBA who also happens to be an Entrepreneur and Public Speaker.</p>
            <div className="btn_div mt-4">
  <Button variant="danger" 
          style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}
          onClick={() => window.location.assign("https://niftyinstitute.io/resources")}>Web 3.0 Blog</Button>
  <Button variant="danger" 
          style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}
          onClick={() => window.location.assign("https://www.youtube.com/channel/UCUfxfD4PlpC1f5SMdHqvs0A")}>
    YouTube
  </Button>
</div>



          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home