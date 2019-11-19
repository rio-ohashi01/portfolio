import React from 'react';

import Movie from './movie.png';
import Snow from './snow.png';
import Game from './game.png';
import Shuttle from './space_shuttle.png';
import Beer from './beer.png';
import Workout from './workout.png';

class Hobbies extends React.Component<{ style: any }>{
  render()
  {
    var values: Array<Array<any | String>> =
      [
        [Movie, "Movie"],
        [Game, "Game"],
        [Workout, "Workout"],
        [Beer, "Drinking"],
        [Shuttle, "Travel"],
        [Snow, "WinterSports"]
      ];

    var hobbies = [];

    for (var value of values)
    {
      hobbies.push(
        <span>
          <img className="hobby" src={value[0]}></img>
          <div>{value[1]}</div>
        </span>
      );
    }
    return (hobbies);
  }
}

export default class Hobby extends React.Component<{ style: any }>{

  renderTechSkillCards(style: any)
  {
    return (<Hobbies style={style} />);
  }

  render()
  {
    return (
      <div className="hobbies">
        {this.renderTechSkillCards(this.props.style)}
      </div>
    );
  }
}