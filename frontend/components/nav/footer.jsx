import React from 'react'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-images">
        <a href="https://github.com/codybreene" target="_blank">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/cody-breene-35409635/" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://angel.co/cody-breene" target="_blank">
          <img src={angelco} alt="" />
        </a>
      </div>
      <p className="merkle-text">© 2020 Merkle Money</p>
    </div>
  )
}