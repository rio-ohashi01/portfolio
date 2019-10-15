import React from 'react';
import flogo from './f_logo.png';
import lilogo from './LI_logo.png';
import ghlogo from './GitHub_logo.png';
import profileImg from './IMG_0980.jpg';
import 'typeface-roboto';

import { AspectRatio, CloudOutlined, Autorenew, DesktopWindowsRounded, ViewQuiltOutlined, EmailOutlined, Storage } from '@material-ui/icons/';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      height: 180,
      width: 300,
      backgroundColor: '#eae7e1',
      boxShadow: 'none',
    },
    media: {
      height: 80,
    },
    progress: {
      margin: theme.spacing(3),
    },
    iconExperience: {
      fontSize: 60,
      height: '100%',
      color: 'rgb(220, 125, 6)',
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
    <div className="App" style={styles.root}>
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
        </span>
      </header>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={12} container justify="center" spacing={spacing}>
          <Grid key={0} item>
            <Card className={classes.card} onMouseOver={function () { alert("aaaa"); }}>
              <CardMedia className={classes.media}>
                <DesktopWindowsRounded className={classes.iconExperience} />
              </CardMedia>
              <CardContent>
                <Typography variant="h4" component="h2">
                  WEB DEVELOPMENT
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  5+ years of experience in frontend and backend. Developed a portal site, a chat service, etc.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid key={1} item>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <AspectRatio className={classes.iconExperience} />
              </CardMedia>
              <CardContent>
                <Typography variant="h4" component="h2">
                  FULL-STACK
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Java, LAMP, JavaScript, HTML, CSS, etc.
                  ※This site is used with React.js
                  Used SQL and NoSQL databases.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid key={2} item>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <Autorenew className={classes.iconExperience} />
              </CardMedia>
              <CardContent>
                <Typography variant="h4" component="h2">
                  DEVOPS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Deployed web apps to EC2 with Jenkins, Maintained the apps,
                  web server app(Nginx), relevant PaaS, environment of development by VirtualBox.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid key={3} item>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <ViewQuiltOutlined className={classes.iconExperience} />
              </CardMedia>
              <CardContent>
                <Typography variant="h4" component="h2">
                  RESPONSIVE
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Adjusted Web design for computer, tablets. mobiles with Flexbox and @media.

                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid key={4} item>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <CloudOutlined className={classes.iconExperience} />
              </CardMedia>
              <CardContent>
                <Typography variant="h4" component="h2">
                  AWS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Architected a serverless chat app with API Gateway, Lambda and DynamoDB.
                  Maintained EC2 apps.
                  Improved message app with Lambda, SQS and SNS.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid key={5} item>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <Storage className={classes.iconExperience} />
              </CardMedia>
              <CardContent>
                <Typography variant="h4" component="h2">
                  SERVERLESS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Architected and developed a serverless customer chat app with AWS services.
                  Improved a serverless cutomer message app with AWS services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
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
