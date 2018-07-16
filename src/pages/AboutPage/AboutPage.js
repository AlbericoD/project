import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <span className="highlight">Technology</span> and
              everything on the web.
            </p>
            <p>
              I'm currently studying{' '}
              <span className="highlight">computer science </span>in Brazil, I'm
              focusing on developing extensions to the{' '}
              <span className="highlight">twitch </span>platform.
            </p>
            <p>
              I've done something with: React, Node.js, Mongo, Sequelize,
              Vanilla Javascript, Docker, AWS, Heroku and Google Translate
              (hehehehehe) are the top tricks up the sleeve.
            </p>

            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToPrevious pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
