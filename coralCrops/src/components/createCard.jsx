import React, { useState } from 'react'
import { addToDo } from '../services/cropsApi'

function CreateCard(props) {
    const crops = props.crops

    // Was meant to add the selected grop to the list on your Home page, but the post request isn't working
    // const handleClick = (crop, e) => {
    //     console.log(crop)
    //     addToDo(crop)
    // }

  return (
    <div>
        {crops.map((crop) => (
            <div className='Card' key={crop.id}>
                <header className='CropHeader'>
                    <img href={crop.imgUrl}></img>
                    <h3>{crop.name}</h3>
                    <button>Add to List</button>
                </header>
                <div className='Cost'>
                    <a href=""></a>
                    {crop.seedCost}
                </div>
                <div className='Properties'>
                    <p>Type: {crop.type}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CreateCard