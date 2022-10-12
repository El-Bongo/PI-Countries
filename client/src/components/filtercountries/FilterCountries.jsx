import React from "react";
import styles from "./FilterCountries.module.css"
import {useDispatch, useSelector} from "react-redux"
import { alphabeticalOrder, filterByContinent, resetFilters, populationOrder, getActivities, filterByActivities } from "../../redux/actions";
import { useEffect } from "react";

const FilterCountries = () =>{
  const dispatch = useDispatch()
  const activities = useSelector(state => state.activities)

  function checkClick(e){
    if(e.target.childElementCount > 0){
      return null
    }else{
      const value = e.target.childNodes[0].data;
      return value
    }
  }
  useEffect(()=>{
    dispatch(getActivities())
  }, [dispatch])

  function handleFilterContinent(e){
    dispatch(filterByContinent(checkClick(e)))
  }
  function handleFilterActivitie(e){
    dispatch(filterByActivities(checkClick(e)))
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
            {
              activities?.map(act => {
                return <li key={act.id}><p>{act.name}</p></li>
              })
            }
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