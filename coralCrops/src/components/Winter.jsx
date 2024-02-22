import React from 'react'
import { useState, useEffect } from 'react'
import { seasonalCrops } from '../services/cropsApi'
import { addToDo } from '../services/cropsApi'
import createCard from './createCard'

export default function Fall() {
    const crops = seasonalCrops("winter")
    console.log(crops)

    return(
            <div>
                <createCard crops={crops}/>
            </div>
    )
}