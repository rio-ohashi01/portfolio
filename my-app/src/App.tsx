import React from 'react';
import flogo from './f_logo.png';
import lilogo from './LI_logo.png';
import ghlogo from './GitHub_logo.png';
import { MailOutline, AspectRatio, CloudOutlined, Build, DesktopWindowsRounded } from '@material-ui/icons/';
import profileImg from './IMG_0980.jpg';
import 'typeface-roboto';
import './App.scss';

const App: React.FC = () =>
{
  let styles = {
    root: {
      fontFamily: 'Roboto'
    }
  }

  return (
    <div className="App">
      <header className="App-header" >
        <p className="anime--flash">
          I'm web-full-stack.
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
          <a href="https://github.com/rio-ohashi"
            target="_blank"
            rel="noopener noreferrer">
            <MailOutline fontSize="large" color="action" className="logo-link" />
          </a></span>
      </header>
      <div>
        <div className="profile">
          <p className="heading--medium">ABOUT US</p>
          <span className="profile--image">
            <img src={profileImg} className="profile--image"></img>
          </span>
          </span>
        </div>
      </div>
    </div >
  );
}

export default App;
