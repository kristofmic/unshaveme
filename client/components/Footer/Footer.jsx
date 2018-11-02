import React from 'react';

function Footer() {
  return (
    <div
      id="footer"
      className="bg-dark d-flex flex-column align-items-center justify-content-center py-5">
      <img
        className="mb-1"
        src="http://d30am0anjtu1dn.cloudfront.net/images/app_icon.svg"
        height="96"
        width="96"
        alt="mustache icon"
      />
      <p className="text-center text-white mb-2">
        <small>
          Made with love in SF & <br />
          Orange County
        </small>
      </p>
      <p className="text-center text-white-50 font-weight-light mb-0">
        <small>Happy bearding</small>
      </p>
    </div>
  );
}

export default Footer;
