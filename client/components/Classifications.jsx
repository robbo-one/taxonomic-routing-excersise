import React from "react";
import ranks from "../../data/ranks";
import{Link} from 'react-router-dom'

const Classifications = (props) => {
  const rank = props.match.params.rank;
  // console.log(rank);

  const classifications = ranks[rank];
  // console.log(classifications);

  return (
    <div>
      <h2>{rank}</h2>
      <ul>
        {(classifications).map((classification) => {
          // console.log(classification.name)
          return (
            // <Individual/>
            <li key={classification.id}>
              <Link to={`/${rank}/${classification.name}`}>{classification.name}</Link>
            </li>
            
          );
        })}
      </ul>
    </div>
  );
};

export default Classifications;
