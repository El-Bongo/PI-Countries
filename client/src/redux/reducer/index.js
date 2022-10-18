import {types} from "../types"

const initialState = {
  countries : [],
  filter_state : [],
  activities: [],
  country: {},
}

const rootReducer = (state = initialState, action) =>{
  switch (action.type) {
    case types.GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filter_state: action.payload
      }
    case types.GET_SINGLE_COUNTRY:
      return {
        ...state,
        country: action.payload
      }
    case types.GET_COUNTRY:
      return {
        ...state,
        filter_state: action.payload
      }
    case types.FILTER_BY_CONTINENT:
      let continentFilter = state.countries.filter(e => e.continent === action.payload)
      return {
        ...state,
        filter_state: continentFilter
      }
    case types.FILTER_BY_ALPHABETICAL_ORDER:
      if(action.payload === "From A to Z"){
        let alphaOrderAsc = [...state.countries].sort((a, b)=>{
          let nameA = a.name.toLowerCase()
          let nameB = b.name.toLowerCase()
          if(nameA < nameB) return -1
          if(nameA > nameB) return 1
          else return 0
        })
        return {
          ...state,
          filter_state: alphaOrderAsc
        }
      }else if(action.payload === "From Z to A"){
        let alphaOrderDesc = [...state.countries].sort((a, b)=>{
          let nameA = a.name.toLowerCase()
          let nameB = b.name.toLowerCase()
          if(nameA > nameB) return -1
          if(nameA < nameB) return 1
          else return 0
        })
        return {
          ...state,
          filter_state: alphaOrderDesc
        }
      }
      break;
    case types.FILTER_BY_POPULATION_ORDER:
      if(action.payload === "Lower to Higher"){
        let popOrderAsc = [...state.countries].sort((a, b)=>{
          return a.population - b.population
        })
        return {
          ...state,
          filter_state: popOrderAsc
        }
      }else if(action.payload === "Higher to Lower"){
        let popOrderDesc = [...state.countries].sort((a, b)=>{
          return b.population - a.population
        })
        return {
          ...state,
          filter_state: popOrderDesc
        }
      }
      break;
    case types.POST_ACTIONS:
      return {
        ...state
            }
      // if(state.activities === undefined){
      //   return {
      //     ...state,
      //     activities: [].concat(action.payload)
      //   }
      // }else{
      //   return {
      //     ...state,
      //     activities: [...state.activities].concat(action.payload)
      //   }
      // }
    case types.GET_ACTIVITIES:
      if(state.actions === undefined){
        return{
              ...state,
              activities: [].concat(action.payload)
              }
      }else{
        return{
              ...state,
              activities: [...state.activities, action.payload]
              }
      }
    case types.FILTER_BY_ACTIVITIES:
      let countries = [...state.filter_state]
      let arrCountries = []
      for (let i = 0; i < countries.length; i++) {
        if(countries[i].activity.length >= 1){
          for (let j = 0; j < countries[i].activity.length; j++) {
            console.log(countries[i].activity)
            if(countries[i].activity[j].name === action.payload){
              arrCountries.push(countries[i])
            }
          }
        }
      }
      return{
            ...state,
            filter_state: arrCountries
            }
    case types.RESET_FILTERS:
      return {
        ...state,
        filter_state: state.countries
      }
    case types.GET_ERROR:
      return {
        ...state,
        filter_state: []
      }
    case types.CLEAN_COUNTRY:
      return {
        ...state,
        country: {}
      }
    default:
      return {state:"default state"}
  }
}


export default rootReducer