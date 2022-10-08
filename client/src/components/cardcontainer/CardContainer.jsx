import React, { useState } from "react";
import { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getAllCountries } from "../../redux/actions";
import CountryCard from "../countrycard/CountryCard"
import FilterCountries from "../filtercountries/FilterCountries"
import styles from "../cardcontainer/CardContainer.module.css"
import Loader from "../../blocks/loader/Loader";
import Pagination from "../pagination/Pagination";

const CardContainer = () =>{
  const dispatch = useDispatch()
  let countriesList = useSelector(state => state.filter_state)

  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPP, setCoutriesPP] = useState(10)

  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])
  const pagination = (page) =>{
    setCurrentPage(page)
  }
  let indexOLP
  let indexOFP
  if(currentPage === 1){
    indexOLP = currentPage * (countriesPP - 1)
    indexOFP = indexOLP - (countriesPP - 1)
  }else{
    indexOLP = currentPage * countriesPP
    indexOFP = indexOLP - countriesPP 
  }
  let allCountries
  if(countriesList?.length > 1){
    allCountries = countriesList.slice(indexOFP, indexOLP)
  }else{
    allCountries = countriesList
  }


  return(
    <div className={styles.main}>
      <FilterCountries className={styles.filterBoxes}/>
      <div className={styles.container}>
        { allCountries?.length === 0? <h2>We didn't found any country with that name, please try again</h2> :
          allCountries? allCountries?.map(country =>{
            return <CountryCard
              key={country.id}
              id={country.id}
              name={country.name}
              image={country.image}
              continent={country.continent}
            />
          }) : <Loader/>
        }
      </div>
      {
        allCountries? <Pagination countries={countriesPP} total={countriesList?.length} pagination={pagination}/> : ""
      }
    </div>
  )
}

export default CardContainer
