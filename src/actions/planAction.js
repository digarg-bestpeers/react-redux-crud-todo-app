import {ADD_PLAN, GET_EDIT_PLAN, EDIT_PLAN, DELETE_PLAN} from "../constants/types"


export const addPlan = (data) => ({
    type: ADD_PLAN,
    payload: data
})


export const getEditPlan = (id) => ({
    type: GET_EDIT_PLAN,
    payload: id
})

export const editPlan = (data) => ({
    type: EDIT_PLAN,
    payload: data,
})

export const deletePlan = (id) => ({
    type: DELETE_PLAN,
    payload: id
})

