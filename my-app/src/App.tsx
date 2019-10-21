import React from 'react';
import profileImg from './IMG_0980.jpg';
import 'typeface-roboto';

import { EmailOutlined } from '@material-ui/icons/';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Experience from './Experience'
import Header from './Header'
import SoftSkill from './SoftSkill'
import TechSkill from './TechSkill'
// import { Motion, spring } from 'react-motion';

import './App.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      backgroundColor: '#eae7e1',
      minHeight: 180,
      width: 300,
      boxShadow: 'none',
    },
    paperSummary: {
      backgroundColor: '#eae7e1',
      width: '20%',
      boxShadow: 'none',
      alignSelf: 'center',
    },
    paperDetail: {
      backgroundColor: '#eae7e1',
      width: '75%',
      boxShadow: 'none',
      paddingLeft: '15px'
    },
    typographyProjectDetail: {
      marginBottom: '15px',
      color: '#847e71',
    },
    media: {
      height: 80,
    },
    progress: {
      margin: theme.spacing(3),
      color: '#C87D06',
    },
    iconLink: {
      color: '#FFFFFF',
    },
    iconExperience: {
      color: '#C87D06',
      fontSize: 60,
      height: '100%',
    },
    button: {
      margin: theme.spacing(1),
      height: 40,
      color: '#FFFFFF',
      backgroundColor: 'rgb(45, 45, 58)',
    },
    email: {
      textDecoration: 'None',
      fontSize: 20,
    },
  })
);

const App: React.FC = () =>
{
  const classes = useStyles();
  const styles = {
    root: {
      fontFamily: 'Roboto'
    },
  }

  // this.state = { animeText: ["I'm web development.", "I'm full-stack."] };

  return (
    <div className="App" style={styles.root}>
      <Header />
      <SoftSkill style={classes} />
      <p className="heading--medium">EXPERIENCE</p>
      <Experience style={classes} />
      <div>
        <p className="heading--medium">ABOUT US</p>
        <div className="profile">
          <span className="profile--left">
            <img src={profileImg} className="profile--image"></img>
            <a id="email1" className={classes.email} href="mailto:rio.ohashi01@gmail.com">
              <Button variant="contained" color="default" className={classes.button}>
                CONTACT ME
                <EmailOutlined className={classes.iconLink} />
              </Button>
            </a>
          </span>
          <span className="profile--right">
            <p className="profile--summary">
              Hi! My name is Rio Ohashi.I'm a Full-Stack Developer, and highly adaptable and eager to learn new technologies continuously to improve my skills.
              </p>
            <TechSkill style={classes} />
          </span>
          <a id="email2" className={classes.email} href="mailto:rio.ohashi01@gmail.com">
            <Button variant="contained" color="default" className={classes.button}>
              CONTACT ME
                <EmailOutlined className={classes.iconLink} />
            </Button>
          </a>
        </div>
      </div>
      <footer className="App--footer">

      </footer>
    </div >
  );
}

export default App;