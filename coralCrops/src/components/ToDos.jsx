import React, { useEffect, useState } from 'react'
import { getTodos } from '../services/cropsApi'
import { editToDo } from '../services/cropsApi'
import { Link } from 'react-router-dom'

export default function ToDos() {
    const [toDoList, setToDos] = useState(null)

    useEffect(() => {
        getTodos()
        .then(response => {
            setToDos(response)
        })
    })

    console.log(toDoList)

  return (
    <div className='Card'>
        Daily To Do
        <button className='EditButton'></button>
        {toDoList.map((crop) => (
            <li className='ListItem' key={crop.id}>
                <a href={crop.imgUrl}></a>
                {crop.name}
                <input type="radio" />
                </li>
        ))}
    </div>
  )
}