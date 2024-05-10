import React from 'react';

function Footer() {
  return (
    <footer className='banner'>
      <div className="title">
        <h1>King's</h1>
        <p>Events and weddings</p>
      </div>
      <div className="tag">
        <label htmlFor="newsletter-input">News Letter</label>
        <div>
          <input type="text" id="newsletter-input" placeholder='Enter Email' />
          <button>Subscribe</button>
        </div>
        <p>Sign up for our newsletter and updates</p>
      </div>
    </footer>
  );
}

export default Footer;
