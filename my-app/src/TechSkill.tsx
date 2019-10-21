import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

class TechSkillCards extends React.Component<{ style: any }>{
  render()
  {
    var values: any = [["Java + Sprin", 90],
    ["HTML + CSS", 80],
    ["Javascript", 80],
    ["React", 50],
    ["SQL", 70],
    ["AWS", 80]];

    var cards = [];
    for (var value of values)
    {
      cards.push(
        <span className="skills--child">
          <span className="skills--name">{value[0]}</span>
          <CircularProgress
            className={this.props.style.progress}
            variant="static"
            value={value[1]}
            thickness={10}
            size={95}
          />
        </span>
      );
    }
    return (cards);
  }
}

export default class TechSkill extends React.Component<{ style: any }>{

  renderTechSkillCards(style: any)
  {
    return (<TechSkillCards style={style} />);
  }

  render()
  {
    return (
      <div className="skills">
        {this.renderTechSkillCards(this.props.style)}
      </div>
    );
  }
}