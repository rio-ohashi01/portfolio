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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

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
  const [spacing] = React.useState<GridSpacing>(3);
  const classes = useStyles();

  const styles = {
    root: {
      fontFamily: 'Roboto'
    },
  }

  return (
    <div className="App" style={styles.root}>
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
      <Grid container className={classes.root} spacing={4}>
        <Grid item container justify="center" spacing={spacing}>
          <Card className={classes.card}
          // onMouseOver={function () { alert("aaaa"); }}
          >
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
                Used SQL and NoSQL databases.
                </Typography>
            </CardContent>
          </Card>
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
                web server app(Nginx), relevant PaaS, environment of development.
                </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia className={classes.media}>
              <ViewQuiltOutlined className={classes.iconExperience} />
            </CardMedia>
            <CardContent>
              <Typography variant="h4" component="h2">
                RESPONSIVE
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Adjusted Web design for computer, tablets. mobiles with Flexbox,etc.
                </Typography>
            </CardContent>
          </Card>
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
      <p className="heading--medium">EXPERIENCE</p>
      <div className="project--container">
        <Paper className={classes.paperSummary}>
          <Typography component="p" color="inherit" align="left">Apr 2019 - PRESENT</Typography>
          <Typography component="p" color="inherit" align="left">Freelance</Typography>
          <Typography component="p" color="inherit" align="left">Web Developer</Typography>
        </Paper>
        <Paper className={classes.paperDetail}>
          <Typography variant="h4" align="left">Searching JS plugin</Typography>
          <Typography className={classes.typographyProjectDetail} component="p" align="left">
            Made a site that explained a JavaScript map plugin Leaflet for developers who developed a customer management tool.
            The site had maps to introduce each functions and design.
          </Typography>
          <Typography variant="h4" align="left">Employee management site</Typography>
          <Typography className={classes.typographyProjectDetail} component="p" align="left">
            Made a few site such as register, update employee information with Vue.js + Nuxt.js
          </Typography>
        </Paper>
      </div>
      <div className="project--container">
        <Paper className={classes.paperSummary}>
          <Typography component="p" color="inherit" align="left">Feb 2016 - Jan 2019</Typography>
          <Typography component="p" color="inherit" align="left">Yayoi Co., Ltd.</Typography>
          <Typography component="p" color="inherit" align="left">Full-stack Engineer</Typography>
        </Paper>
        <Paper className={classes.paperDetail}>
          <Typography variant="h4" align="left">Customer support chat service</Typography>
          {/* <Typography component="a" align="left" ref="https://auth.yayoi-kk.co.jp/auth/sign_in.do?service_id=mypoweb&success=https%3A%2F%2Fmyportal.yayoi-kk.co.jp%2F">Link</Typography> */}
          <Typography className={classes.typographyProjectDetail} component="p" align="left">
            Architected serverless application with AWS services(Lambda + Node.js, API Gateway, DynamoDB, S3),
            Managed 2 programmer members' schedule and tasks,
            Reviewed specifications and codes the members made,
            Made specifications,
            Deployed application all of environment to each AWS services
        </Typography>
          <Typography variant="h4" align="left">Portal site for accountants</Typography>
          <Typography className={classes.typographyProjectDetail} component="p" align="left">
            Defined business requirement,
            Made specifications and test scripts,
            Programmed background (Java + Spring Framework), frontend (HTML, CSS + SCSS, Javascript + jQuery), unit test codes and shell scripts,
            Deployed application and all of the environment to CentOS on Amazon EC2 with Jenkins,
            Maintained or added setting Nginx server,
            Monitored log of application and server
        </Typography>
          <Typography variant="h4" component="h3" align="left">Message service</Typography>
          <Typography className={classes.typographyProjectDetail} component="p" align="left">
            Optimized sending message function at Lambda with recursion.
            The function became to be able to adjust easily performance as much as whoever want, such as 10 times or 1000 times than before.
          </Typography>
        </Paper>
      </div>
      <div className="project--container">
        <Paper className={classes.paperSummary}>
          <Typography component="p" color="inherit" align="left">Jul 2014 - Jan 2016</Typography>
          <Typography component="p" color="inherit" align="left">V-cube Inc</Typography>
          <Typography component="p" color="inherit" align="left">Web Developer</Typography>
        </Paper>
        <Paper className={classes.paperDetail}>
          <Typography variant="h4" component="h3" align="left">Portal site for video chat</Typography>
          <Typography className={classes.typographyProjectDetail} component="p" align="left">
            Programmed background (PHP + Symfony3), frontend (Twig, jQuery) and shell scripts,
          </Typography>
          <Typography variant="h4" component="h3" align="left">In-house API</Typography>
          <Typography className={classes.typographyProjectDetail} component="p" align="left">
            Programmed background with PHP + Symfony3
          </Typography>
        </Paper>
      </div>
      <div className="project--container">
        <Paper className={classes.paperSummary}>
          <Typography component="p" color="inherit" align="left">Apr 2012 -  Jun 2014</Typography>
          <Typography component="p" color="inherit" align="left">Alt Inc</Typography>
          <Typography component="p" color="inherit" align="left">Windows App Programmer</Typography>
        </Paper>
        <Paper className={classes.paperDetail}>
          <Typography variant="h4" component="h3" align="left">Mission-critical system Windows app</Typography>
          <Typography className={classes.typographyProjectDetail} component="p" align="left">
            Programmed C#.NET for management systems such as employee, branch, items, business days, etc.
            Coded SQL(PL/SQ+) of Oracle Databases for warehouse shipment and stock movement,
            Made business form with GrapeCity.
          </Typography>
        </Paper>
      </div>
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
            <div className="skills">
              <span className="skills--child">
                <span className="skills--name">Java + Spring</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={90}
                  thickness={10}
                  size={95}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">HTML + CSS</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={80}
                  thickness={10}
                  size={95}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">Javascript</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={80}
                  thickness={10}
                  size={95}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">React.js</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={50}
                  thickness={10}
                  size={95}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">SQL</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={70}
                  thickness={10}
                  size={95}
                />
              </span>
              <span className="skills--child">
                <span className="skills--name">AWS</span>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  value={80}
                  thickness={10}
                  size={95}
                />
              </span>
            </div>
          </span>
          <a id="email2" className={classes.email} href="mailto:rio.ohashi01@gmail.com">
            <Button variant="contained" color="default" className={classes.button}>
              CONTACT ME
                <EmailOutlined className={classes.iconLink} />
            </Button>
          </a>
        </div>
      </div>
    </div >
  );
}

export default App;
