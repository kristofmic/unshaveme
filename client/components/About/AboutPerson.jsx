import React from 'react';

import PlaceholderImage from '../PlaceholderImage';

function AboutPerson({ image, name, position, socialLinks = [] }) {
  return (
    <div className="card mb-3">
      <div className="card-body py-4 px-5">
        <div className="mb-3">
          {image ? (
            <div
              className="rounded-circle about-image"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            />
          ) : (
            <PlaceholderImage
              componentClass="circle"
              height={180}
              width={180}
            />
          )}
        </div>
        <p className="h5 card-title text-center font-weight-bold mb-1">
          {name}
        </p>
        <p className="card-text text-center font-weight-light">{position}</p>
        <p className="card-text d-flex justify-content-center">
          {socialLinks.map(social => (
            <a
              className={`btn btn-secondary mx-1 rounded-circle text-white social-link social-link--${
                social.icon
              }`}
              key={social.icon}
              href={social.href}
              target="_blank"
              role="button">
              <i className={`fab fa-${social.icon}`} />
            </a>
          ))}
        </p>
      </div>
    </div>
  );
}

export default AboutPerson;
