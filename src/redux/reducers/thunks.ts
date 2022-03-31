import { ThunkAction } from "redux-thunk"
import { api } from "../../api/api"
import { setTodos, setUsers } from "./reducer"
import { ActionTypes } from "./types/actionTypes"
import { IState } from "./types/stateTypes"

export type ThunkType = ThunkAction<void, IState, unknown, ActionTypes>

export const getServerData = (): ThunkType => async dispatch => {
    const res1 = await api.getUsers()
    const res2 = await api.getTodos()

    if (res1.status === 200) dispatch(setUsers(res1.data))
    if (res2.status === 200) dispatch(setTodos(res2.data))
}