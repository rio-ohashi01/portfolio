import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class ExperienceDetail extends React.Component<{ style: any, details: any }>{
  render()
  {
    var experienceDetails = [];
    for (var detail of this.props.details)
    {
      experienceDetails.push(
        <div>
          <Typography variant="h4" align="left">
            {detail[0]}
          </Typography>
          <Typography className={this.props.style.typographyProjectDetail} component="p" align="left">
            {detail[1]}
          </Typography>
        </div>
      );
    }

    return (experienceDetails);
  }
}

export default class Experience extends React.Component<{ style: any }>{
  renderExperienceDetail(style: any, details: any)
  {
    return (<ExperienceDetail style={style} details={details} />);
  }

  render()
  {
    var values =
      [
        ["Apr 2019 - PRESENT", "Freelance", "Web Developer",
          [0,
            ["Searching JS plugin", "Made a site that explained a JavaScript map plugin Leaflet for developers who developed a customer management tool.The site had maps to introduce each functions and design."],
            ["Employee management site", "Made a few site such as register, update employee information with Vue.js + Nuxt.js"]
          ]
        ],
        ["Feb 2016 - Jan 2019", "Yayoi Co., Ltd.", "Full-stack Engineer",
          [1,
            ["Customer support chat service", "Architected serverless application with AWS services(Lambda + Node.js, API Gateway, DynamoDB, S3), Managed 2 programmer members' schedule and tasks,Reviewed specifications and codes the members made,Made specifications,Deployed application all of environment to each AWS services"],
            ["Portal site for accountants", "Defined business requirement, Made specifications and test scripts, Programmed background (Java + Spring Framework), frontend (HTML, CSS + SCSS, Javascript + jQuery), unit test codes and shell scripts, Tested the program, Deployed application and all of the environment to CentOS on Amazon EC2 with Jenkins, Maintained or added setting Nginx server, Monitored log of application and server"],
            ["Message service", "Optimized sending message function at Lambda(Node.js) with recursion. The function became to be able to adjust easily performance as much as whoever want, such as 10 times or 1000 times than before."]
          ]
        ],
        ["Jul 2014 - Jan 2016", "V-cube Inc", "Web Developer",
          [2,
            ["Portal site for video chat", "Programmed background (PHP + Symfony3), frontend (Twig, jQuery) and shell scripts, Upgraded web framework Symfony2 to Symfony3"],
            ["In-house API", "Programmed background with PHP + Symfony3, Tested the program"]
          ]
        ],
        ["Apr 2012 - Jun 2014", "Alt Inc", "Windows App Programmer",
          [3,
            ["Mission-critical system Windows app", "Programmed C#.NET for management systems such as employee, branch, items, business days, etc. Coded SQL(PL/SQ+) of Oracle Databases for warehouse shipment and stock movement, Tested the program, Made business form with GrapeCity."]
          ]
        ]
      ];

    var experiences = [];

    // alert(JSON.stringify(values[3]));
    for (var value of values)
    {
      experiences.push(
        <div className="projects">
          <Paper className={this.props.style.paperSummary}>
            <Typography component="p" color="inherit" align="left">{value[0]}</Typography>
            <Typography component="p" color="inherit" align="left">{value[1]}</Typography>
            <Typography component="p" color="inherit" align="left">{value[2]}</Typography>
          </Paper>
          <Paper className={this.props.style.paperDetail}>
            {this.renderExperienceDetail(this.props.style, value[3])}
          </Paper>
        </div>
      );
    }
    return (experiences);
  }
}