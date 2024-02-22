import React from 'react'
import { useState, useEffect } from 'react'
import { seasonalCrops } from '../services/cropsApi'
import { addToDo } from '../services/cropsApi'
import CreateCard from './createCard'

export default function Fall() {
    const [crops, setCrops] = useState([])

    useEffect(() => {
        seasonalCrops("fall")
        .then(response => setCrops(response))
    }, [])

    console.log(crops)

    return(
            <div>
                <CreateCard crops={crops}/>
            </div>
    )
}