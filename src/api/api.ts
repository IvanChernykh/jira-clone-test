import axios from "axios"


export const api = {
    getUsers: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .catch(err => err)
    },
    getTodos: () => {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
            .catch(err => err)
    }
}