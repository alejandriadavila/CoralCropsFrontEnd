import React from 'react'
import { useState } from 'react'
import { seasonalCrops } from '../services/cropsApi'
import { addToDo } from '../services/cropsApi'

export default function Fall(props) {
    const crops = seasonalCrops("fall")
    console.log(crops)

    return(
        crops.map((crop) => (
            <div className='Card'>
            <header className='CropHeader' key={crop.id}>
                <a href={crop.imgUrl}></a>
                <h3>{crop.name}</h3>
                <button>+List</button>
            </header>
            <div className='Cost'>
                <a href=""></a>
                {crop.seedCost}
            </div>
            <div className='Properties'>
                Type: {crop.type}
                Does it regrow?
                {/* {if(crop.regrowBoolean == "true"){
                    {crop.regrowTime}
                }} */}
            </div>
            </div>
        ))
    )

    crops.map((crops) => {
        let type = crops.type
        let seedCost = crops.seedCost
        let growthTime = crops.growthTime
        let regrowBoolean = crops.regrowBoolean
        let regrowTime = crops.regrowTime
        // Button for adding to the ToDos
    })
    
    return (
    <div>Fall</div>
  )
}