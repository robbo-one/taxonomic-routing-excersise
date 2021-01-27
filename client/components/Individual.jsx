import React from "react";
import ranks from "../../data/ranks";
import {Link} from 'react-router-dom'

const Individual = (props) => {
  const name = props.match.params.name;
  let ranking = props.match.params.rank;

  let obj = ranks[ranking].find((animal) => {
    return animal.name == name;
  });

  return (
    <div>
      <h2>{obj.name}</h2>
      <p>{obj.description}</p>
      <Link to={`${props.match.url}/species`}>Show species</Link>
      <div>

      </div>
    </div>
  );
};

export default Individual;
