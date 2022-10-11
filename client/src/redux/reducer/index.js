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
    case types.FILTER_BY_CONTINENT:
      let continentFilter = state.countries.filter(e => e.continent === action.payload)
      return {
        ...state,
        filter_state: continentFilter
      }
    case types.ALPHABETICAL_ORDER:
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
    case types.POPULATION_ORDER:
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
      console.log(action.payload)
      return{
            
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