import axois from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getData = () => {
    const request = axois.get(baseUrl)

    return request.then(response => response.data)
}

const addData = (willAddPerson) => {
    const request = axois.post(baseUrl, willAddPerson)

    return request.then(response => response.data)
}

const deleteData = id => {
    const request = axois.delete(`${baseUrl}/${id}`)

    return request
}

export default { getData, addData, deleteData }