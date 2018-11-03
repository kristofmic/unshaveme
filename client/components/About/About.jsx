import React from 'react';

import AboutPerson from './AboutPerson';

const PEOPLE = [
  {
    image: 'https://d30am0anjtu1dn.cloudfront.net/images/chris_mustache.jpg',
    name: 'Chris Hourihan',
    position: 'Web Engineering',
    socialLinks: [
      { href: 'https://github.com/kristofmic', icon: 'github' },
      {
        href: 'https://www.linkedin.com/in/chris-hourihan-1080633/',
        icon: 'linkedin-in',
      },
    ],
  },
  {
    image: 'https://d30am0anjtu1dn.cloudfront.net/images/yosun_kissy.jpg',
    name: 'Yosun Chang',
    position: 'AR Engineering',
    socialLinks: [
      { href: 'https://github.com/yosun', icon: 'github' },
      { href: 'https://twitter.com/Yosun', icon: 'twitter' },
      { href: 'https://www.linkedin.com/in/yosun', icon: 'linkedin-in' },
    ],
  },
  {
    image: 'https://d30am0anjtu1dn.cloudfront.net/images/zack_beard.jpg',
    name: 'Zack Hargett',
    position: 'Design & Business',
    socialLinks: [
      { href: 'https://medium.com/@zackhargett', icon: 'medium-m' },
      { href: 'https://twitter.com/zackhargett', icon: 'twitter' },
      {
        href: 'https://www.linkedin.com/in/zackaryhargett',
        icon: 'linkedin-in',
      },
    ],
  },
];

function About() {
  return (
    <div id="about">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <p className="h1 text-center font-weight-bold mb-3">About</p>
            <p className="text-center mb-5">
              We created Unshave to be a fun way to see what you would look like
              with facial hair. We hope you’ll have as much fun using the app as
              we’ve had making it for you.
            </p>
          </div>
        </div>
        <div className="card-deck flex-column flex-lg-row">
          {PEOPLE.map(person => (
            <AboutPerson key={person.name} {...person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
