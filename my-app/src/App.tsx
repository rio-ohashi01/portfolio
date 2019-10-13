import React from 'react';
import flogo from './f_logo.png';
import lilogo from './LI_logo.png';
import ghlogo from './GitHub_logo.png';
import { MailOutline, AspectRatio, CloudOutlined, Build, DesktopWindowsRounded } from '@material-ui/icons/';
import profileImg from './IMG_0980.jpg';
import 'typeface-roboto';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(3),
    },
  })
);

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
          <span>
            <div className="skills">
              <span className="skills--child">
                <span className="skills--name">Java + Spring</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={80}
                  thickness={10}
                  size={100}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">PHP + Symfony</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={60}
                  thickness={10}
                  size={100}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">HTML</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={70}
                  thickness={10}
                  size={100}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">CSS</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={70}
                  thickness={10}
                  size={100}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">Javascript</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={80}
                  thickness={10}
                  size={100}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">React.js</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={40}
                  thickness={10}
                  size={100}
                />
              </span>
            </div>
          </span>
        </div>
      </div>
    </div >
  );
}

export default App;
