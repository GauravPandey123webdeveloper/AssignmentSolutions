import React from 'react'

export default function Introduction({name,age,course,image}) {
  return (
    <div className='intro'>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{course}</h2>
      <img src={image} alt="intro" height='100px'/>
    </div>
  )
}
