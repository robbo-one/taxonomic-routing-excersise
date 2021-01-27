import React from 'react'
import ranks from '../../data/ranks'

const Individual = (props) => {
  const name = props.match.params.name;
  let ranking = props.match.params.rank
  // const id = props.match.params.id;
  // console.log(name)
  // let rank = props.match.params.rank
  // console.log(rank)
  // console.log(animal)  
  // const animals = ranks[ranking]
  // let kingdoms = ranks.find(kingdom => {
  //   return kingdom = ranking
  // })
  

  let objects = {}

  console.log(ranks[ranking])

 
 for (let i = 0; i < 6; i++ ) {
  //  console.log(ranks)
  //  if (ranks[i] == ranking) {
  //     objects = ranks[i]
  //  }
 }
//  console.log(objects)
  // let things = animals.name = name
  let obj = ranks[ranking].find(animal => {
    return animal.name == name
  })
// console.log(obj)
// const individual = ranks.rank[id].name
// console.log(individual)
return (
  <div>
    <h2>{obj.name}</h2>
    <p>{obj.description}</p>
  </div>

)}



export default Individual
