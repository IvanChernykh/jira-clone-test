export interface ITodoData {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface IUserData {
    id: number
    name: string
    username: string
    email: string
    website?: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: number
            lng: number
        }
    }
}