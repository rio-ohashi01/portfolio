import React from 'react';
import flogo from './f_logo.png';
import lilogo from './LI_logo.png';
import ghlogo from './GitHub_logo.png';

export default class Header extends React.Component
{
  render()
  {
    return (
      <header className="App-header" >
        <p className="summary"  >
          I'm Web full-stack.
        </p>
        <span>
          <a href="https://m.facebook.com/monotori333"
            target="_blank"
            rel="noopener noreferrer">
            <img src={flogo} className="logo-link" />
          </a>
          <a href="https://www.linkedin.com/in/rio-ohashi/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={lilogo} className="logo-link" />
          </a>
          <a href="https://github.com/rio-ohashi"
            target="_blank"
            rel="noopener noreferrer">
            <img src={ghlogo} className="logo-link" />
          </a>
        </span>
      </header>
    )
  }
}
