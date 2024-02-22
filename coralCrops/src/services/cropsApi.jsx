import axios from "axios"

const baseURL = 'http://localhost:5050'

// Get all crops for a given season
export const seasonalCrops = async(season) => {
    const URL = `${baseURL}/${season}`
    try{
        const response = await axios.get(URL)
        const {data} = response.data
        return data
    }catch(err){
        console.log(err)
    }
}

// Get list of all toDo crops
export const getTodos = async() => {
    const URL = `${baseURL}/toDo`
    try{
        const response = await axios.get(URL)
        const {data} = response.data
        return data
    }catch(err){
        console.log(err)
    }
    }


// Add a crop to the toDo list
export const addToDo = async(toDo) => {
    const URL = `${baseURL}/toDo`
    try {
        const response = await axios.post(URL, toDo)
        const {data} = response.data
        return data
    } catch (err) {
        console.log(err)
    }

}

// Edit one toDo item
export const editToDo = async(id, updatedToDo) => {
    const URL = `${baseURL}/toDo/${id}`
    try {
        const response = await axios.patch(URL, updatedToDo)
        const {data} = response.data
        return data
    } catch (err) {
        console.log(err)
    }
}

// Delete one toDo item
export const deleteToDo = async(id) => {
    const URL = `${baseURL}/toDo/${id}`
    try {
        const response = await axios.delete(URL)
        const {data} = response.data
        return data
    } catch (err) {
        console.log(err)
    }
}