import axios from "axios"

const baseURL = 'https://localhost:5050'

// Get all crops for a given season
export const seasonalCrops = (season) => {
    const URL = `${baseURL}/${season}`
    axios.get(URL)
    const response = axios.get(URL)
    return response
}

// Get list of all toDo crops
export const getTodos = () => {
    const URL = `${baseURL}/toDo`
    const response = axios.get(URL)
    return response
}

// Add a crop to the toDo list
export const addToDo = (toDo) => {
    const URL = `${baseURL}/toDo`
    const response = axios.post(URL, toDo)
    return response
}

// Edit one toDo item
export const editToDo = (id, updatedToDo) => {
    const URL = `${baseURL}/toDo/${id}`
    const response = axios.patch(URL, updatedToDo)
    return response
}

// Delete one toDo item
export const deleteToDo = (id) => {
    const URL = `${baseURL}/toDo/${id}`
    const response = axios.delete(URL)
}