import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Avadhoot Dandekar {new Date().getFullYear()} All rights reserved ✨ Proudly deployed on{' '}
          <a href="https://www.netlify.com/"><b>Netlify</b></a>.
        </span>
      </div>
    </footer>
  </div>
)
