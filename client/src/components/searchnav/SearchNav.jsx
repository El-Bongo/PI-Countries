import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { getCountry } from "../../redux/actions";
import styles from "./SearchNav.module.css"

const SearchNav = () =>{

  const [countrySearch, setCountrySearch] = useState("")
  let dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault()
    if(countrySearch === "") alert("There is nothing to search, try again!")
    else{
      dispatch(getCountry(countrySearch))
      setCountrySearch("")
    }
  }

  function handleChange(e){
    setCountrySearch(e.target.value)
  }
  return(
    <div className={styles.searchBar}>
      <button onClick={e => handleSubmit(e)}>Search</button>
      <input onChange={e => handleChange(e)} onKeyPress={e => e.key === 'Enter' && handleSubmit(e)} value={countrySearch} type="text" placeholder="Search for any country"/>
    </div>
  )
}

export default SearchNav