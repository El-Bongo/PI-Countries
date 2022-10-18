import axios from "axios"
import {types} from "../types"

export const getAllCountries = () => async (dispatch) =>{
  let info = await axios.get("http://localhost:3001/countries")
  return dispatch({
    type: types.GET_ALL_COUNTRIES,
    payload: info.data
  })
}
export const getCountry = (name) => async (dispatch) =>{
  let info
  try {
    info = await axios.get(`http://localhost:3001/countries?name=${name}`)
    return dispatch({
      type: types.GET_COUNTRY,
      payload: info.data
    })
  } catch (error) {
    return dispatch({
      type: types.GET_ERROR,
      payload: error
    })
  }
}
export const getSingleCountry = (id) => async (dispatch) =>{
  let info = await axios.get(`http://localhost:3001/countries/${id}`)
  return dispatch({
    type: types.GET_SINGLE_COUNTRY,
    payload: info.data
  })
}
export const getActivities = () => async (dispatch) =>{
  let data = await axios.get(`http://localhost:3001/activities`)
  return dispatch({
    type: types.GET_ACTIVITIES,
    payload: data.data
  })
}
export const filterByActivities = (data) => async (dispatch) =>{
  return dispatch({
    type: types.FILTER_BY_ACTIVITIES,
    payload: data
  })
}
export const postActions = (values) => async(dispatch) =>{
  let data = await axios.post(`http://localhost:3001/activities` , values)
  return dispatch({
    type: types.POST_ACTIONS,
    payload: data.data[0]
  })
}

export const resetFilters = (data) =>{
  return {
    type: types.RESET_FILTERS,
    payload: data
  }
}
export const filterByContinent = (data) =>{
  return {
    type: types.FILTER_BY_CONTINENT,
    payload: data
  }
}
export const alphabeticalOrder = (data) =>{
  return {
    type: types.FILTER_BY_ALPHABETICAL_ORDER,
    payload: data
  }
}
export const populationOrder = (data) =>{
  return {
    type: types.FILTER_BY_POPULATION_ORDER,
    payload: data
  }
}
export const cleanCountry = () =>{
  return {
    type: types.CLEAN_COUNTRY,
  }
}