import React from 'react'
import { useState } from 'react'
import { getTodos } from '../services/cropsApi'
import { editToDo } from '../services/cropsApi'

export default function ToDos(props) {
    const toDoList = getTodos()
    console.log(toDoList)

  return (
    <div className='Card'>
        Daily To Do
        <button className='EditButton'></button>
        {toDoList.map((crop) => (
            <li className='ListItem' key={crop.id}><a href={crop.imgUrl}></a>{crop.name}</li>
        ))}
        <ul>
            <li><a href=""></a> Radishes <input type="radio" /></li>
            <li><a href=""></a> Radishes <input type="radio" /></li>
            <li><a href=""></a> Radishes <input type="radio" /></li>
            <li><a href=""></a> Radishes <input type="radio" /></li>
        </ul>
    </div>
  )
}