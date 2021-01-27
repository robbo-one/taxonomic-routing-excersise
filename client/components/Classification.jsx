//@ts-check

import React from "react"
import ranks from "../../data/ranks";


const Classification = (props) => {
  const rank = props.match.params.rank;
  const name = props.match.params.name;
  const names = ranks[rank];

  for (let i = 0; i < names.length; i++) {
    if (names[i].name === name) {
      return (
        <div>
          <h2>{name}</h2>
          <div>{names[i].description}</div>
        </div>
      );
    }
  }
}

export default Classification
