import React from "react";
import styles from "./FilterCountries.module.css"
import {useDispatch} from "react-redux"
import { alphabeticalOrder, filterByContinent, resetFilters, populationOrder } from "../../redux/actions";

const FilterCountries = () =>{
  const dispatch = useDispatch()

  function checkClick(e){
    if(e.target.childElementCount > 0){
      return null
    }else{
      const value = e.target.childNodes[0].data;
      return value
    }
  }

  function handleFilterContinent(e){
    dispatch(filterByContinent(checkClick(e)))
  }
  function handleFilterActivitie(e){
    console.log("The activity is: " + checkClick(e))
  }
  function handleAlphabeticalOrder(e){
    dispatch(alphabeticalOrder(checkClick(e)))
  }
  function handlePopulationOrder(e){
    dispatch(populationOrder(checkClick(e)))
  }
  function handleReset(){
    dispatch(resetFilters())
  }


  return(
    <div>
      <ul className={`${styles.menu} ${styles.cf}`}>
        <li onClick={() => handleReset()}>
          <p>Reset filters</p>
        </li>
        <li>
          <p>Filter by continent</p>
          <ul onClick={e => handleFilterContinent(e)} className={styles.submenu}>
            <li><p>North America</p></li>
            <li><p>South America</p></li>
            <li><p>Asia</p></li>
            <li><p>Europa</p></li>
            <li><p>Africa</p></li>
            <li><p>Oceania</p></li>
            <li><p>Antarctica</p></li>
          </ul>			
        </li>
        <li>
          <p>Filter by activity</p>
          <ul onClick={e => handleFilterActivitie(e)} className={styles.submenu}>
            <li><p>some activitie 1</p></li>
            <li><p>some activitie 2</p></li>
          </ul>			
        </li>
        <li>
          <p>Alphabetical order</p>
          <ul onClick={e => handleAlphabeticalOrder(e)} className={styles.submenu}>
            <li><p>From A to Z</p></li>
            <li><p>From Z to A</p></li>
          </ul>			
        </li>
        <li>
          <p>Population order</p>
          <ul onClick={e => handlePopulationOrder(e)} className={styles.submenu}>
            <li><p>Higher to Lower</p></li>
            <li><p>Lower to Higher</p></li>
          </ul>			
        </li>
      </ul>
    </div>
  )
}

export default FilterCountries