import React from 'react'
import { useState, useEffect } from 'react'
import { seasonalCrops } from '../services/cropsApi'
import { addToDo } from '../services/cropsApi'
import CreateCard from './createCard'

export default function Summer() {
    const [crops, setCrops] = useState([])

    useEffect(() => {
        seasonalCrops("summer")
        .then(response => setCrops(response))
    }, [])

    console.log(crops)

    return(
            <div>
                <CreateCard crops={crops}/>
            </div>
    )
}