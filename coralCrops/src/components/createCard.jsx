import React from 'react'

function createCard(props) {
    const crops = props.crops
    
  return (
    <div>
        {crops.map((crop) => (
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
        ))}
    </div>
  )
}

export default createCard