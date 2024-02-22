import React from 'react'

function CreateCard(props) {
    const crops = props.crops

  return (
    <div>
        {crops.map((crop) => (
            <div className='Card' key={crop.id}>
                <header className='CropHeader'>
                    <img href={crop.imgUrl}></img>
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
        ))}
    </div>
  )
}

export default CreateCard