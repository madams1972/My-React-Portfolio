import React from 'react'
import "./footer.css"
import { SocialIcon } from 'react-social-icons';



const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Malissa Adams</h4>
            <p>© {year} Malissa Adams All rights reserved</p>
            <p className='d-flex'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Let's get connected I am open to working with or for you.</p>
            <p>madams@stantonadams.com</p>
            <p>+1 6127303103</p>
          </div>
          <div className="third mt-5">
            
            <h4>Follow Malissa On Social</h4>
           
            <SocialIcon url="https://twitter.com/ToughTeddezNFT" />
            <SocialIcon url="https://www.instagram.com/nft_teacher1/" />
            <SocialIcon url="https://www.tiktok.com/@toughteddez?lang=en" />
            <SocialIcon url="https://www.facebook.com/AdamsMalissa/" />
            <SocialIcon url="https://discord.com/invite/EdKtRp3ydB" />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer